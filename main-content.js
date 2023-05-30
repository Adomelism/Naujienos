import newsWrapper from './newsWrapper.js';
import videoSectionWrapper from './video-section-wrapper.js';


export default function mainContent() {
    const mainContent = document.createElement('main');
    mainContent.classList.add('main-content');

    mainContent.append(newsWrapper("Naujienos"), videoSectionWrapper('Vaizdo įrašai'))

    return mainContent;
}