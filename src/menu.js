function createMenu() {
    const main = createE("main")
    main.innerHTML = "Welcome to MENU page!"

    return main;
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

function loadMenu() {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu