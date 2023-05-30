import {PODCAST_DATA} from "./config.js";
// import podcast from "./podcast.js";

export default function podcastsWrapper(title) {
    const podcastsWrapper = document.createElement('div')
    podcastsWrapper.classList.add('podcasts-wrapper')

    if (title) {
        const sectionTitle = document.createElement('h2')
        sectionTitle.classList.add('section-title')
        sectionTitle.textContent = title
        podcastsWrapper.append(sectionTitle)
            //  podcast())
    }

    PODCAST_DATA.forEach(podcastData => {
        let {podcastImageSrc, podcastLength, podcastTitle, podcastDate} = podcastData
        // console.log(podcastImageSrc)
        // console.log(podcastLength)
        // console.log(podcastTitle)
        // console.log(podcastDate)

});
    return podcastsWrapper;
}

