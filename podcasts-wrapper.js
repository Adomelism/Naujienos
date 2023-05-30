import {PODCAST_DATA} from "./config.js";
import podcast from "./podcast.js";

export default function podcastsWrapper(title) {
    const podcastsWrapper = document.createElement('div')
    podcastsWrapper.classList.add('podcasts-wrapper')

    
    const sectionTitle = document.createElement('h2')
    sectionTitle.classList.add('section-title')
    sectionTitle.textContent = title
    
    
    const podcastsList = document.createElement('div')
    podcastsList.classList.add('podcasts-wrapper')
    
    podcastsWrapper.append(sectionTitle, podcastsList)

    PODCAST_DATA.forEach(podcastData => {

        podcastsList.append(podcast(podcastData))

        // const podcastElement = podcast(podcastData)
        // console.log(podcastData)
        // podcastsWrapper.append(podcastElement)
        // console.log(podcastImageSrc)
        // console.log(podcastLength)
        // console.log(podcastTitle)
        // console.log(podcastDate)

});
    return podcastsWrapper;
}

