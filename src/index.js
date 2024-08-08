import { loadHome } from './homepage.js';
import { loadMenu } from './menupage.js';
import './style.css';

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);

loadHome();