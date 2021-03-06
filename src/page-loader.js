import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const createE = (elementName, content, className, href) => {
  const element = document.createElement(elementName);

  if (content) {
    element.innerHTML = content;
  }

  if (className) {
    element.classList.toggle(className);
  }

  if (href) {
    element.href = href;
  }

  return element;
};

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.nav-btn');

  buttons.forEach((btn) => {
    btn.classList.remove('active');
  });

  button.classList.add('active');
}

function createHeader() {
  const nav = document.createElement('nav');

  const buttons = createE('div', false, 'buttons');

  const homeButton = createE('button', 'Home', 'nav-btn');
  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeButton);
    loadHome();
  });
  buttons.appendChild(homeButton);

  const menuButton = createE('button', 'Menu', 'nav-btn');
  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuButton);
    loadMenu();
  });
  buttons.appendChild(menuButton);

  const contactButton = createE('button', 'Contact', 'nav-btn');
  contactButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(contactButton);
    loadContact();
  });
  buttons.appendChild(contactButton);

  const navText = createE('div', false, 'nav-text');
  navText.appendChild(createE('h1', 'Hilton Tashkent City'));
  navText.appendChild(createE('h3', 'City 21 Pan Asian Restaurant'));
  nav.appendChild(navText);

  nav.appendChild(buttons);

  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = createE('footer');
  const footerDiv = createE('div', 'Copyright © 2021 Sarvar Khalimov');
  const linkIcon1 = createE('a', '', 'icon-link', 'https://github.com/SarvarKh');
  linkIcon1.setAttribute('target', '_blank');
  const icon1 = document.createElement('i');
  icon1.classList.add('fab');
  icon1.classList.add('fa-github');

  const linkIcon2 = createE('a', '', 'icon-link', 'https://www.linkedin.com/in/sarvar-khalimov/');
  linkIcon2.setAttribute('target', '_blank');
  const icon2 = document.createElement('i');
  icon2.classList.add('fab');
  icon2.classList.add('fa-linkedin');

  const linkIcon3 = createE('a', '', 'icon-link', 'https://sarvarkh.github.io/portfolio/');
  linkIcon3.setAttribute('target', '_blank');
  const icon3 = document.createElement('i');
  icon3.classList.add('fas');
  icon3.classList.add('fa-folder-open');

  linkIcon1.appendChild(icon1);
  linkIcon2.appendChild(icon2);
  linkIcon3.appendChild(icon3);
  footerDiv.appendChild(linkIcon1);
  footerDiv.appendChild(linkIcon2);
  footerDiv.appendChild(linkIcon3);
  footer.appendChild(footerDiv);

  return footer;
}

function start() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector('.nav-btn'));
  loadHome();
}

export default start;