import { tns } from '../node_modules/tiny-slider/src/tiny-slider';

export function reloadSlider() {
  const slider = tns({
    container: '.my-slider',
    items: 4,
    slideBy: 1,
    speed: 2000,
    autoplay: true,
    autoWidth: true,
    controls: false,
    nav: false,
    autoplayButton: false,
    autoplayText: ['', ''],
  });

  // items: 4  ==>le nbre d'éléments présents à l'écran
  // slideBy: 1, ==> au lieu de "page"
  // speed: 2000,
  // autoplay: true,
  // autoWidth: true,
  // controls: false,
  // nav: false,
  // autoplayButton: false,
  // autoplayText: ['', ''],

  const cheveux = document.getElementById('cheveux');
  const poche = document.getElementById('poche');
  const rein = document.getElementById('rein');
  const poumon = document.getElementById('poumon');
  const coeur = document.getElementById('coeur');
  const torse = document.getElementById('torse');

  const organ = [cheveux, poche, rein, poumon, coeur, torse];
  const test = '';

  // for (let i = 0; i < organ.length; i++) {
  //   console.log(organ[0]);
  //   test = organ[0];
  //   test.style.display = ;
  // }

  // organ.forEach(organ of organs){
  //  organ.map()

  // }
}
