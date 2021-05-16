import hilton1 from "./images/hilton05.jpg"
import hilton2 from "./images/hilton04.jpg"
import hilton3 from "./images/hilton03.jpg"
import hilton4 from "./images/home.jpg"

function createHome() {
    const home = document.createElement("div");
    home.setAttribute("id", "home");

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


    const footer = createE("footer");
    const footerDiv = createE("div", "Copyright © 2021 Sarvar Khalimov");
    const linkIcon1 = createE("a", "", "icon-link", "https://github.com/SarvarKh");
    linkIcon1.setAttribute("target", "_blank")
    const icon1 = document.createElement("i");
    icon1.classList.add("fab");
    icon1.classList.add("fa-github");
    
    const linkIcon2 = createE("a", "", "icon-link", "https://www.linkedin.com/in/sarvar-khalimov/");
    linkIcon2.setAttribute("target", "_blank")
    const icon2 = document.createElement("i");
    icon2.classList.add("fab");
    icon2.classList.add("fa-linkedin");
    
    const linkIcon3 = createE("a", "", "icon-link", "https://sarvarkh.github.io/portfolio/");
    linkIcon3.setAttribute("target", "_blank")
    const icon3 = document.createElement("i");
    icon3.classList.add("fas");
    icon3.classList.add("fa-folder-open");
    
    linkIcon1.appendChild(icon1);
    linkIcon2.appendChild(icon2);
    linkIcon3.appendChild(icon3);
    footerDiv.appendChild(linkIcon1);
    footerDiv.appendChild(linkIcon2);
    footerDiv.appendChild(linkIcon3);
    footer.appendChild(footerDiv);
    home.appendChild(footer);

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

function loadHome() {
    const main = document.querySelector("#main");
    main.appendChild(createHome());
}

export default loadHome