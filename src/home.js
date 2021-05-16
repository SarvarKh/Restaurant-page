import hilton1 from "./images/hilton05.jpg"
import hilton2 from "./images/hilton04.jpg"
import hilton3 from "./images/hilton03.jpg"
import hilton4 from "./images/home.jpg"

function pageLoad() {
    const home = document.createElement("div");
    home.setAttribute("id", "home");

    const nav = document.createElement("nav");
    const navbar = createE("div", false, "navbar");
    navbar.appendChild(createE("a", "Home", "nav-link", "#home"));
    navbar.appendChild(createE("a", "Menu", "nav-link", "#menu"));
    navbar.appendChild(createE("a", "Contact", "nav-link", "#contact"));
    nav.appendChild(createE("h1", "Hilton Tashkent City"));
    nav.appendChild(createE("h3", "City 21 Pan Asian Restaurant"));
    nav.appendChild(navbar);
    home.appendChild(nav);

    const main = createE("main");
    const container = createE("div", false, "navbar");
    createImg(hilton1, container, "photo")
    createImg(hilton2, container, "photo")
    createImg(hilton3, container, "photo")
    createImg(hilton4, container, "photo")
    
    main.appendChild(container);
    home.appendChild(main);
    return home;
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

function createImg(source, appendTo, className) {
    let photo = new Image();
    photo.src = source;
    photo.classList.add(className)
    appendTo.appendChild(photo);
}


export default pageLoad