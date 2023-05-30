import mainContent from "./main-content.js";
import sidebarContent from "./sidebar-content.js";

function init() {

    const mainContentElement = document.querySelector('#main-page-content');

    const containerElement = document.createElement('div');
    containerElement.classList.add('container');

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');

    contentWrapper.append(mainContent(), sidebarContent());

    containerElement.append(contentWrapper);
    mainContentElement.append(containerElement);
    document.body.prepend(containerElement)
}

init();