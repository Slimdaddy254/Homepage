import './styles.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import loadAbout from './about';

function setActiveButton(button) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const aboutBtn = document.getElementById('about-btn');
    const contactBtn = document.getElementById('contact-btn');

    homeBtn.addEventListener('click', () => {
        loadHome();
        setActiveButton(homeBtn);
    });

    menuBtn.addEventListener('click', () => {
        loadMenu();
        setActiveButton(menuBtn);
    });
    aboutBtn.addEventListener('click', () => {    // Add this event listener
        loadAbout();
        setActiveButton(aboutBtn);
    });

    contactBtn.addEventListener('click', () => {
        loadContact();
        setActiveButton(contactBtn);
    });

    // Load home page by default
    loadHome();
    setActiveButton(homeBtn);
});