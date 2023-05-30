export default function newsItem(data) {
    let {imgSrc, newsCategory, newsTitle, newsDate} = data;
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    const linkNewsItem = document.createElement('a');
    newsItem.append(linkNewsItem);

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('news-wrapper');

    const imageElement = document.createElement('img');
    imageWrapper.append(imageElement);

    const newsContent = document.createElement('div');
    newsContent.classList.add('news-content');

    const newsCategoryElement = document.createElement('span');
    newsCategoryElement.classList.add('news-category');
    linkNewsItem.append(imageWrapper, newsContent)

    const newsTitleElement = document.createElement('h3');
    newsTitleElement.classList.add('news-title')

    const newsDateElement =document.createElement('span');
    newsDateElement.classList.add('news-date')
    newsContent.append(newsCategoryElement, newsTitleElement, newsDateElement)

    imageElement.src = imgSrc;
    newsCategoryElement.textContent = newsCategory;
    newsTitleElement.textContent = newsTitle;
    newsDateElement.textContent = newsDate;

    return newsItem;
}