import podcastsWrapper from "./podcasts-wrapper.js";

export default function podcast() {
    const podcast = document.createElement('div')
    podcast.classList.add('podcast')

    const podcastControls = document.createElement('div')
    podcastControls.classList.add('podcast-controls')

    const podcastImage = document.createElement('img')
    podcastImage.src = podcastImageSrc

    const podcastLength = document.createElement('span')
    podcastLength.classList.add('podcast-length')
    podcastLength.textContent = podcastLength

    const podcastPlay = document.createElement('button')
    podcastPlay.classList.add('podcast-play')
    podcastPlay.textContent = 'Play'

    const podcastContent = document.createElement('div')
    podcastContent.classList.add('podcast-content')

    const podcastTitle = document.createElement('h3')
    podcastTitle.classList.add('podcast-title')
    podcastTitle.textContent = podcastTitle

    const podcastDate = document.createElement('span')
    podcastDate.classList.add('podcast-date')
    podcastDate.textContent = podcastDate

    podcast.append(podcastControls, podcastContent)
    podcastControls.append(podcastImage, podcastLength, podcastPlay)
    podcastContent.append(podcastTitle, podcastDate)
    
    podcastsWrapper.append(podcast())


    return podcast;
}