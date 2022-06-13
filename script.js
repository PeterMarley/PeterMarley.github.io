const projectsDiv = document.querySelector('.projects');
const projects = [
    {
        'title': 'Crasio Calculator',
        'image': './img/crasioCalculator.png',
        'text': 'Crasio calculator is a simple web calculator that implements a simple calculator that respects order of operations (PEDMAS). It was initially an exersize of The Odin Project, which did not expect order of operations to be respected, that I went further with.',
    },
    {
        'title': 'Budget Keeper',
        'image': './img/checkers.png',
        'text': 'I was sick of all the bloated budgeting software I had tried so I decided to make my own. You enter what you spend and receive, and it keeps track. Implemented in Java, using an <em>sqlite3</em> database and <em>JavaFX</em> GUI',
    },
    {
        'title': 'Checkers',
        'image': './img/budgetKeeper-windowYear.png',
        'text': 'The first complex (?) program I ever made. Locally played 2-player Checkers. Enforces all rules. Implemented in Java, with a <em>Swing</em> GUI.',
    }
];

for (let obj of projects) {
    buildCard(obj, projectsDiv);
}

function buildCard(project, parent) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = project.title;

    let cardImg = document.createElement('div');
    cardImg.classList.add('card-img');
    cardImg.style.backgroundImage = `url('${project.image}')`;

    let cardText = document.createElement('div');
    cardText.classList.add('card-text');
    cardText.innerHTML = project.text;

    card.appendChild(cardTitle);
    card.appendChild(cardImg);
    card.appendChild(cardText);
    console.log(card.children);

    parent.appendChild(card);
}