import './style.scss';

import { donsvivant } from './view/donsvivant';
import { donsmort } from './view/donsmort';
import { actualites } from './view/actualites';
import { quisommesnous } from './view/quisommenous';
import { contact } from './view/contact';
import { nav } from './view/nav';

// import $ from 'jquery';

// -----------SCRIPT SLIDE ANNICK -----------------------

/* import { tns } from './node_modules/tiny-slider/src/tiny-slider';

const slider = tns({
  container: '.my-slider',
  items: 2,
  slideBy: 'page',
  autoplay: true,
}); */
// ------------------QUI SOMMES NOUS MADI ----------------------------------------
function tournerLaCarte(e) {
  var elements = e.target.parentNode.querySelectorAll("div[class^='card']");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].className === 'card-single') {
      elements[i].className += ' rotated';
    } else {
      elements[i].className = 'card-single';
    }
  }
}
const main = document.querySelector('main');
const header_nav = document.querySelector('header');

header_nav.innerHTML = nav;

const link_donsvivant = document.getElementById('link_donsvivant');
const link_donsmort = document.getElementById('link_donsmort');
const link_actualite = document.getElementById('link_actualite');
const link_quisommenous = document.getElementById('link_quisommenous');
const link_contact = document.getElementById('link_contact');

link_donsvivant.addEventListener('click', function (e) {
  //  e.preventDefault(); => Empecher le comportement par defaut du lien
  e.preventDefault();
  main.innerHTML = donsvivant;
});

link_donsmort.addEventListener('click', function (e) {
  //  e.preventDefault(); => Empecher le comportement par defaut du lien
  e.preventDefault();
  main.innerHTML = donsmort;
});

link_actualite.addEventListener('click', function (e) {
  //  e.preventDefault(); => Empecher le comportement par defaut du lien
  e.preventDefault();
  main.innerHTML = actualites;
});

link_quisommenous.addEventListener('click', function (e) {
  //  e.preventDefault(); => Empecher le comportement par defaut du lien
  e.preventDefault();
  main.innerHTML = quisommesnous;
});

link_contact.addEventListener('click', function (e) {
  //  e.preventDefault(); => Empecher le comportement par defaut du lien
  e.preventDefault();
  main.innerHTML = contact;
});

// Deleguation d elements
document.body.addEventListener('click', function (e) {
  // matches => si la chose cliquer est le btns
  if (e.target.matches('#btn')) { tournerLaCarte(e); }
  if (e.target.matches('#btn_Annick')) { tournerLaCarte(e); }
  if (e.target.matches('#btn_Mad')) { tournerLaCarte(e); }
});
/* btnAnnick.addEventListener('click', tournerLaCarte);
btnMad.addEventListener('click', tournerLaCarte); */

//----------------------------------------------------------------------
