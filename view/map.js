import './styles.scss';
import './styles/nav.scss';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeMarker } from './src/leaflet-helpers/leaflet-fa-icons';

// ******************************************************
// CREER LA MAP
// ******************************************************

const bruxelles = {
  latitude: '50.850340',
  longitude: '4.351710',
};

// ******************************************************
// la fonction map() qui va chercher dans le html-id, init map
// ******************************************************

const map = L.map('map');

// ******************************************************
// VUE MAP d'en HAUT
// ******************************************************

map.setView([bruxelles.latitude, bruxelles.longitude], 8);

// ******************************************************
// ATTRIBUTION QUI LOAD LA PAGE - COPYRIGHT QUI SE TROUVE EN BAS A DROITE
// ******************************************************

const myLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 19,
});
// Là, il rajoute l'id en enfant de la section map!
map.addLayer(myLayer);

const hospitals = [
  { lat: 50.81361224889263, lon: 4.265964443476183, name: 'Hôpital Erasme - Cliniques universitaires de Bruxelles' },
  { lat: 51.15789711500079, lon: 4.410877555307225, name: "Hôpital universitaire d'Antwerp" },
  { lat: 50.88632096369452, lon: 4.309504870637188, name: 'UZ Jette' },
  { lat: 50.87925510899605, lon: 4.674550076707459, name: 'Hôpital Universitaire de Leuven' },
  { lat: 50.57271, lon: 5.56700, name: 'CHU de Liège' },
  { lat: 50.86404760086254, lon: 4.361169993368167, name: 'ICS-InCorporeSano' },
  { lat: 50.836538146380775, lon: 4.3334092687874595, name: 'SPF Santé Publique' },

];
// const erasme = {
//   latitude: 50.81361224889263,
//   longitude: 4.265964443476183,
// };

// const myErasme = L.marker([erasme.latitute, erasme.longitude]);
// mymyErasme.addTo(map);
// map.bindPopup('erasme');

const hospitalsMarkerGroup = [];
for (const hospital of hospitals) {
  const marker = L.marker([hospital.lat, hospital.lon], {
    icon: new FontAwesomeMarker({
      iconClasses: 'fas fa-hospital-symbol',
      markerColor: '#086375',
      markerFillOpacity: 1,
      markerStrokeWidth: 1,
      markerStrokeColor: '#00a9ce',
      iconColor: '#1ddbb0',
      iconSize: '16px',
    }),
  });

  marker.bindPopup(hospital.name);
  hospitalsMarkerGroup.push(marker);
}
const hospitalsLayerGroup = L.layerGroup(hospitalsMarkerGroup);
map.addLayer(hospitalsLayerGroup);

// const main = document.querySelector('main');

// const links = document.querySelectorAll('a');

// links.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     const id = link.id; // e.currentTarget.id;
//     if (id === 'nav-toto') {
//       applyTotoView();
//     } else if (id === 'nav-tutu') {
//       applyTutuView();
//     }
//   });
// });

// main.addEventListener('click', (e) => {
//   if (e.target.matches('button')) {
//     e.preventDefault();
//     alert('toto');
//   }
// });
