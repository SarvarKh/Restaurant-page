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
    container.appendChild(createImg(hilton1, "photo"))
    container.appendChild(createImg(hilton2, "photo"))
    container.appendChild(createImg(hilton3, "photo"))
    container.appendChild(createImg(hilton4, "photo"))
    const descr = createE("p");
    descr.innerHTML = "Appreciate stunning views from the Pan Asian restaurant which is located on the top 21th floor, open from lunchtime until late evening and serving some of the finest dishes in the city. Enjoy the city from our spacious outdoor terrace while indulging in a wide range of wines and international spirits. Relax to some of the coolest music, while savoring delicacies prepared by our chef."
    main.appendChild(container);
    main.appendChild(descr);
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

function createImg(source, className) {
    let photo = new Image();
    photo.src = source;
    photo.classList.add(className)

    return photo
}


export default pageLoad