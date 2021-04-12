import "./styles.scss";
import $ from "jquery";

import {content_photo} from './view/photo'
// import 'bootstrap';

const main = document.querySelector('main');
const content_acceuil = document.getElementById('content_acceuil');
const lien_acceuil = document.getElementById('lien_acceuil');
const lien_photo = document.getElementById('lien_photo');
const lien_dessin = document.getElementById('lien_dessin');
const lien_contact = document.getElementById('lien_contact');

lien_photo.addEventListener('click', function(e){

    e.preventDefault();
    main.innerHTML = content_photo;
})

lien_acceuil.addEventListener('click', function(e){

    e.preventDefault();
    main.innerHTML = content_acceuil;

})