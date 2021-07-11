import renderContact from './contact.js';
import renderMenu from './menu.js';
import './style.less';
import HappyCoffee from './HappyCoffee.png';


//Global DOM Elements
const title = document.createElement('div');
const logo = document.createElement('div');
const navbar = document.createElement("div");
const homeBtn = document.createElement('button');
const menuBtn = document.createElement ('button');
const contactBtn = document.createElement('button');
const hours = document.createElement('div');
const hoursText = document.createElement('p');
const content = document.createElement('div');



//Initial home page load. Renders the contents of the navbar as well as the home page contents 
renderTitle();
renderPage();


//Event listeners to control the page navigation from the navbar
logo.addEventListener('click', ()=>{
    clearPageContent();
    renderPage();
});

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


//Function to render top of the page
function renderTitle() {


title.classList.add("title");
logo.classList.add("logo");
navbar.classList.add("nav-bar");
hours.classList.add('hours');
hoursText.classList.add('hours-text');
logo.textContent = "Yuki's Chill Time Cafe";
hoursText.textContent= "Open Everyday 7 a.m. to 5 p.m.";
homeBtn.textContent = "Home";
menuBtn.textContent = "Our Menu";
contactBtn.textContent = "Contact Us";

homeBtn.classList.add("nav-btns");
menuBtn.classList.add("nav-btns");
contactBtn.classList.add("nav-btns");

document.body.appendChild(title);
title.appendChild(logo);
title.appendChild(navbar);

navbar.appendChild(homeBtn);
navbar.appendChild(menuBtn);
navbar.appendChild(contactBtn);

document.body.appendChild(hours);
hours.appendChild(hoursText);


};

//Function to render the contents of the main page
function renderPage (){
    const text = document.createElement('p');
    text.textContent= "Yuki's cafe is a chill, laid back spot to enjoy a cup of coffee, grab a pastry, and relax with friends and family. Come check us out sometime! Of course this site is completely made up and this cafe does not exist, so good luck actually finding us. Go to our contact page to \"get in touch\".";
    content.classList.add("content");
    text.classList.add("page-text");

    const icon = new Image();
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("coffee-img");
    icon.src=HappyCoffee;
    icon.classList.add("coffee-icon");
    document.body.appendChild(content);
    content.appendChild(text);
    content.appendChild(iconDiv);
    iconDiv.appendChild(icon);
};

//Function to clear the contents of a page in order to load the users desired page
function clearPageContent() {

    while(content.firstChild) {
        content.removeChild(content.lastChild);
    };
}
