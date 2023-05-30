import mainNews from './main-news.js';
import secondaryNews from './secondary-news.js';
import buttonLarge from './buttonLarge.js';

export default function newsWrapper(title) {
    const newsWrapper = document.createElement('div');
    newsWrapper.classList.add('news-wrapper');

    if (title) {

    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title');
    sectionTitle.textContent = title;
    newsWrapper.append(sectionTitle)
    }

    newsWrapper.append(mainNews(), secondaryNews(), buttonLarge("Visos Naujienos"));

    return newsWrapper;
}