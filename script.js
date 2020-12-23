import './style.scss';
import { donsvivant } from './view/donsvivant';

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
function tournerLaCarte() {
  var elements = this.parentNode.querySelectorAll("div[class^='card']");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].className === 'card-single') {
      elements[i].className += ' rotated';
    } else {
      elements[i].className = 'card-single';
    }
  }
}

var btns = document.getElementById('btn');
var btnAnnick = document.getElementById('btn_Annick');
var btnMad = document.getElementById('btn_Mad');
if (btns) {
  btns.addEventListener('click', tournerLaCarte);
  btnAnnick.addEventListener('click', tournerLaCarte);
  btnMad.addEventListener('click', tournerLaCarte);
}

// }

const link_donsvivant = document.getElementById('link_donsvivant');
const main = document.querySelector('main');

link_donsvivant.addEventListener('click', function (e) {
  //  e.preventDefault(); => Empecher le comportement par defaut du lien
  e.preventDefault();
  main.innerHTML = donsvivant;
});

//----------------------------------------------------------------------
