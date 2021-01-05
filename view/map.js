import L, { Icon } from 'leaflet';
/* import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet/dist/leaflet.css'; */

// @see and thanks to https://github.com/danwild/leaflet-fa-markers
const FontAwesomeMarker = Icon.extend({
  options: {
    popupAnchor: [0, -50],
  },
  createIcon() {
    const { options } = this;
    // error check on required params
    if (!options.markerColor) {
      return console.error('markerColor is mandatory when creating new FontAwesomeMarker');
    }
    if (!options.iconClasses) {
      return console.error('iconClasses is mandatory when creating new FontAwesomeMarker');
    }
    // default value for optional params
    const defaults = {
      markerFillOpacity: 1,
      markerStrokeColor: options.markerColor,
      markerStrokeWidth: 1,
      markerPath: 'M16,1 C7.7146,1 1,7.65636364 1,15.8648485 C1,24.0760606 16,51 16,51 C16,51 31,24.0760606 31,15.8648485 C31,7.65636364 24.2815,1 16,1 L16,1 Z',
      iconColor: 'aquamarine',
      iconSize: '22px',
    };
    // marker icon DomUtil doesn't seem to like svg, just append out html directly
    const marker = `
      <div class="leaflet-fa-markers">
        <div class="marker-icon-svg">
          <svg 
            width="32px"
            height="52px"
            viewBox="0 0 32 52"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="${options.markerPath ?? defaults.markerPath}"
            fill-opacity="${options.markerFillOpacity ?? defaults.markerFillOpacity}"
            fill="${options.markerColor}"
            stroke="${options.markerStrokeColor ?? defaults.markerColor}"
            stroke-width="${options.markerStrokeWidth ?? defaults.markerStrokeWidth}"
            ></path>
          </svg>
        </div>
        <i 
          class="feature-icon ${options.iconClasses}" 
          style="color:${options.iconColor ?? defaults.iconColor};font-size:${options.iconSize ?? defaults.iconSize};"></i>
      </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = marker;
    return div;
  },
});

// ******************************************************
// CREER LA MAP
// ******************************************************
export function excuteMap() {
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
}

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
