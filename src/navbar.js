import loadHome from './home';

function navbarLoad() {
    const nav = document.createElement("nav");

    const homeButton = createE("button", "Home", "nav-btn");
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
      });
    nav.appendChild(homeButton);

    const menuButton = createE("button", "Menu", "nav-btn");
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    });
    nav.appendChild(menuButton);

    const contactButton = createE("button", "Contact", "nav-btn");
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    });
    nav.appendChild(contactButton);

    nav.appendChild(createE("h1", "Hilton Tashkent City"));
    nav.appendChild(createE("h3", "City 21 Pan Asian Restaurant"));

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
  
    return nav;
}

function createE(elementName, content, className) {
    let element = document.createElement(elementName);
    
    if (content) {
        element.innerHTML = content;
    }

    if (className) {
        element.classList.toggle(className);
    }

    return element;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function start() {
    const content = document.getElementById("content");
    content.appendChild(navbarLoad());
    content.appendChild(createMain());
    
    setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}

export default start