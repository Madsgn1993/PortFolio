import './styles.scss';
import { tns } from './node_modules/tiny-slider/src/tiny-slider';

const slider = tns({
  container: '.my-slider',
  items: 4,
  slideBy: 'page',
  autoplay: true,
});

const cheveux = document.getElementById('cheveux');
const poche = document.getElementById('poche');
const rein = document.getElementById('rein');
const poumon = document.getElementById('poumon');
const coeur = document.getElementById('coeur');
const torse = document.getElementById('torse');

const organ = ['cheveux', 'poche', 'rein', 'poumon', 'coeur', 'torse'];
let test = '';

for (let i = 0; i < organ.length; i++) {
  console.log(organ[0]);
  test = organ[0];
  test.style.display = 'none';
}

// organ.forEach(organ of organs){
//  organ.map()

// }
