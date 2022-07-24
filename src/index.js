// styles
import './styles.css';
import './carousel.css';
// images
/* eslint-disable no-unused-vars */
import bkWindowMonth from './img/budgetKeeper-windowMonth.png';
import bkWindowTransaction from './img/budgetKeeper-windowTransaction.png';
import bkWindowYear from './img/budgetKeeper-windowYear.png';
import ck from './img/checkers.png';
import cc from './img/crasioCalculator.png';
/* eslint-enable no-unused-vars */

// projects data from json
import projectsJson from './cards.json';

import { createCarousel } from './carousel';

const projectsDiv = document.querySelector('.projects');

// (function init() {
//   // for (let obj of projects) {
//   //     buildCard(obj, projectsDiv);
//   // }
//   buildCards(projectsJson);
// }());

function buildCards(projectsJson) {
  const cards = [];
  for (const projectId in projectsJson) {
    cards.push(buildCard(projectsJson[projectId]));
  }
  return cards;
}

function buildCard(project) {
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
  // console.log(card.children);

  return card;
}

let x = createCarousel(buildCards(projectsJson))
document.querySelector('.viewport').appendChild(x);
