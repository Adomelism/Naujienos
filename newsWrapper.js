import mainNews from './main-news.js';
import secondaryNews from './secondary-news.js';

export default function newsWrapper() {
    const newsWrapper = document.createElement('div');
    newsWrapper.classList.add('news-wrapper');

    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title');

    newsWrapper.append(sectionTitle, mainNews(), secondaryNews());

    return newsWrapper;
}