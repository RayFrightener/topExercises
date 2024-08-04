import { pageLoad } from './populateHTML';
import { homeTab } from './homeTab';
import {contactTab} from './contactTab';
import { aboutTab } from './aboutTab';
import './styles.css';

function loadHome() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML ='';
    contentDiv.appendChild(homeTab());
}

function loadContact() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(contactTab());
}

function loadAbout() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(aboutTab());
}

document.getElementById('home-tab').addEventListener('click', loadHome);
document.getElementById('about-tab').addEventListener('click', loadAbout);
document.getElementById('contact-tab').addEventListener('click', loadContact);

loadHome();