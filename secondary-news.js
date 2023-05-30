import {SECONDARY_NEWS_DATA} from './config.js';
import newsItem from './newsItem.js';

export default function secondaryNews() {
    const secondaryNews = document.createElement('div');
    secondaryNews.classList.add('secondary-news');

    SECONDARY_NEWS_DATA.forEach(element => {
        const newsItemElement = newsItem(element)
        secondaryNews.append(newsItemElement)
    });


    return secondaryNews;
}