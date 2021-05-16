function createContact() {
    const main = createE("main")
    main.innerHTML = "Welcome to Contact page!"

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

function loadContact() {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact