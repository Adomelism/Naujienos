import {MAIN_NEWS_DATA} from './config.js';
import newsItem from './newsItem.js';

export default function mainNews(data) {
    const mainNews = document.createElement('div');
    mainNews.classList.add('main-news');

    MAIN_NEWS_DATA.forEach(element => {
        const newsItemElement = newsItem(element)
        mainNews.append(newsItemElement)
    });

    return mainNews;
}