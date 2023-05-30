import newsWrapper from './newsWrapper.js';


export default function mainContent() {
    const mainContent = document.createElement('main');
    mainContent.classList.add('main-content');

    mainContent.append(newsWrapper("Naujienos"))

    return mainContent;
}