import renderContact from './contact';
import renderMenu from './menu';
import './style.css';



renderTitle();
renderPage();


function renderTitle() {

const logo = document.createElement('div');
const nav = document.createElement('div');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement ('button');
const contactBtn = document.createElement('button');

nav.classList.add("nav-bar");

logo.textContent = "Nacho's Good Time Diner";
logo.classList.add('logo');

homeBtn.textContent = "Home";
menuBtn.textContent = "Our Menu";
contactBtn.textContent = "Contact Us";

homeBtn.classList.add("nav-btns");
menuBtn.classList.add("nav-btns");
contactBtn.classList.add("nav-btns");

document.body.appendChild(logo);
document.body.appendChild(nav);

nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);


homeBtn.addEventListener('click',renderPage);
menuBtn.addEventListener('click', renderMenu);
contactBtn.addEventListener('click', renderContact);

};

function renderPage (){
    const content = document.createElement('div');
    content.textContent= "This is the body of my restaurant page, It has info about this restaurant that totally does not exist";
    document.body.appendChild(content);
};