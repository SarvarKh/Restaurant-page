function navbarLoad(params) {
    const container = document.createElement("div");
    
    const nav = document.createElement("nav");
    const navbar = createE("div", false, "navbar");
    navbar.appendChild(createE("button", "Home", "nav-btn"));
    navbar.appendChild(createE("button", "Menu", "nav-btn"));
    navbar.appendChild(createE("button", "Contact", "nav-btn"));
    nav.appendChild(createE("h1", "Hilton Tashkent City"));
    nav.appendChild(createE("h3", "City 21 Pan Asian Restaurant"));
    nav.appendChild(navbar);
    container.appendChild(nav);

    return container;
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

export default navbarLoad