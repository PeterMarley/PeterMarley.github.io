// styles
import './styles.css';
// images
/* eslint-disable no-unused-vars */
import bkWindowMonth from './img/budgetKeeper-windowMonth.png';
import bkWindowTransaction from './img/budgetKeeper-windowTransaction.png';
import bkWindowYear from './img/budgetKeeper-windowYear.png';
import ck from './img/checkers.png';
import cc from './img/crasioCalculator.png';
/* eslint-enable no-unused-vars */

// projects data from json
import projects from './cards.json';

const projectsDiv = document.querySelector('.projects');

(function init() {
  // for (let obj of projects) {
  //     buildCard(obj, projectsDiv);
  // }
  buildCards(projects, projectsDiv);
}());

function buildCards(json, elementToAppendTo) {
  for (const project of json) {
    buildCard(json[project], elementToAppendTo);
  }
}

function buildCard(project, elementToAppendTo) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = project.title;

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img');
  cardImg.src = project.images.cardPacked;

  const cardText = document.createElement('div');
  cardText.classList.add('card-text');
  cardText.innerHTML = project.text;

  card.appendChild(cardTitle);
  card.appendChild(cardImg);
  card.appendChild(cardText);
  console.log(card.children);

  elementToAppendTo.appendChild(card);
}
