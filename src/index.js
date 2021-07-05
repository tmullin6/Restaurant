import renderContact from './contact.js';
import renderMenu from './menu.js';
import './style.css';

const logo = document.createElement('div');
const nav = document.createElement('div');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement ('button');
const contactBtn = document.createElement('button');
const content = document.createElement('div');

renderTitle();
renderPage();

homeBtn.addEventListener('click', ()=>{
   clearPageContent();
   renderPage();
});

menuBtn.addEventListener('click', ()=>{
    clearPageContent();
    content.appendChild(renderMenu());
});

contactBtn.addEventListener('click', ()=>{

    clearPageContent();
    content.appendChild(renderContact());
});



function renderTitle() {


nav.classList.add("nav-bar");

logo.textContent = "Yuki's Dental Stick Cafe";
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

};

function renderPage (){
    
    content.textContent= "This is the body of my restaurant page, It has info about this restaurant that totally does not exist";
    content.classList.add("content");
    document.body.appendChild(content);
};

function clearPageContent() {

    while(content.firstChild) {
        content.removeChild(content.lastChild);
    };
}
