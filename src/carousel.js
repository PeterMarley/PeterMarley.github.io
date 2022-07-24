let position = 0;

function createCarouselDotHud(carouselElementArray) {
    const carousel = document.createElement('div');
    const slider = document.createElement('div');
    const hud = document.createElement('div');
    const controls = document.createElement('div');
    const controlPrev = document.createElement('div');
    const controlNext = document.createElement('div');

    carousel.className = 'carousel';
    slider.className = 'slider';
    hud.className = 'hud';
    controls.className = 'controls';
    controlPrev.className = 'control-prev';
    controlNext.className = 'control-next';

    controlPrev.textContent = 'Previous';
    controlNext.textContent = 'Next';

    for (let i = 0, displayFirst = true; i < carouselElementArray.length; i++) {
        const imgDot = document.createElement('div');
        imgDot.textContent = 'o';

        if (displayFirst) {
            displayFirst = false;
            imgDot.className = 'current';
            carouselElementArray[i].classList.add('current');
        } else {
            imgDot.className = 'off-right';
        }
        imgDot.addEventListener('click', () => slideTo(i));
        slider.appendChild(carouselElementArray[i]);
        hud.appendChild(imgDot);
    }

    controlPrev.addEventListener('click', slidePrev);
    controlNext.addEventListener('click', slideNext);

    controls.append(controlPrev, controlNext);
    carousel.append(slider, hud, controls);

    return carousel;
}


function slideTo(slideNumber) {
    position = slideNumber;
    /*
    set current
    advance the image to slideNumber
        sort classes
    advance the dot to slide slideNumber
        sort classes
    */
    // get carousel elements necessary for processing
    const carousel = document.querySelector('.carousel');
    const slider = carousel.querySelector('.slider');
    const cards = carousel.querySelectorAll('.slider .card');
    const dots = carousel.querySelectorAll('.hud>div');

    // capture positioning values
    const centerOffSet = convertPxValToNumber(getComputedStyle(carousel).getPropertyValue('--center-offset'));
    const leftValue = convertPxValToNumber(getComputedStyle(slider).left);

    // set new current slide & positioning
    let currentSlideIndex;
    let found = false;
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const dot = dots[i];
        // determine number of slides to move
        if (card.classList.contains('current') && !found) {
            found = true;
            currentSlideIndex = i;
        }

        // set new current slide
        // if (i === slideNumber) card.classList.add('current'); 
        // else card.classList.remove('current');

        if (i < slideNumber) {
            card.className = 'card'
            card.classList.remove('current');
            dot.classList.remove('current');
        } else if (i > slideNumber) {
            card.classList.remove('current');
            dot.classList.remove('current');
        } else if (i === slideNumber) {
            card.classList.add('current');
            dot.classList.add('current');
        }

    }
    const placesToMove = slideNumber - currentSlideIndex;
    const finalLeftVal = (leftValue - ((centerOffSet * placesToMove) + (placesToMove * (20 + 2))));
    // alert('left value: ' + leftValue + '\n' + 'final left value: ' + finalLeftVal);
    slider.style.left = (finalLeftVal) + 'px';




    function convertPxValToNumber(pixelValue) {
        if (typeof pixelValue !== 'string') throw Error("convertPxValToNumber can only take string parameters");
        if (pixelValue.length < 2) throw Error(`convertPxValToNumber must be minimumal length of 2 but was ${pixelValue.length}`);
        return parseInt(pixelValue.substring(0, pixelValue.length - 2));
    }
}

function slidePrev() { return slideTo(position - 1); }
function slideNext() { return slideTo(position + 1); }
/**
 * 
 * @param {'forwards' | 'backwards'} direction 
 * @param {boolean} bounce controls if the slideshow bounces direction when hitting end of slideshow
 * @param {number} internalInMs a positive number
 */
function slideShow(direction, bounce, internalInMs) {
    if ((direction !== 'forwards' && direction !== 'backwards' && direction !== undefined)
        || internalInMs < 0) {
        return;
    }
    const interval = internalInMs || 5000;
    const bouncing = bounce || false;

    let f = () => {
        self.sliding = setInterval(() => {
            console.log('forward');
            const response = self.slideNext();
            if (response === 'last') {
                clearInterval(self.sliding);
                if (bouncing) b();
            }
        }, interval);
    };

    let b = () => {
        self.sliding = setInterval(() => {
            console.log('backwards');
            const response = self.slidePrev();
            if (response === 'first') {
                clearInterval(self.sliding);
                if (bouncing) f();
            }
        }, interval);
    };

    if (direction === 'forwards') f();
    if (direction === 'backwards') b();
}
function stopSlideShow() {
    if (sliding) clearInterval(sliding);
}

export { createCarouselDotHud as createCarousel };