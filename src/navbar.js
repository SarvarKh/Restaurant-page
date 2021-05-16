function navbarLoad(params) {
    const container = document.createElement("div");
    
    const nav = document.createElement("nav");
    const navbar = createE("div", false, "navbar");
    navbar.appendChild(createE("a", "Home", "nav-link", "#home"));
    navbar.appendChild(createE("a", "Menu", "nav-link", "#menu"));
    navbar.appendChild(createE("a", "Contact", "nav-link", "#contact"));
    nav.appendChild(createE("h1", "Hilton Tashkent City"));
    nav.appendChild(createE("h3", "City 21 Pan Asian Restaurant"));
    nav.appendChild(navbar);
    container.appendChild(nav);

    return container;
}

function createE(elementName, content, className, href) {
    let element = document.createElement(elementName);
    
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
}

export default navbarLoad