export default function podcast(data) {

    let {imageSrc, length, title, date} = data;

    const podcast = document.createElement('div')
    podcast.classList.add('podcast')

    const podcastControls = document.createElement('div')
    podcastControls.classList.add('podcast-controls')

    const podcastImage = document.createElement('img')
    podcastImage.src = imageSrc

    const podcastLength = document.createElement('span')
    podcastLength.classList.add('podcast-length')
    podcastLength.textContent = length

    const podcastPlay = document.createElement('button')
    podcastPlay.classList.add('podcast-play')

    const podcastContent = document.createElement('div')
    podcastContent.classList.add('podcast-content')

    const podcastTitle = document.createElement('h3')
    podcastTitle.classList.add('podcast-title')
    podcastTitle.textContent = title

    const podcastDate = document.createElement('span')
    podcastDate.classList.add('podcast-date')
    podcastDate.textContent = date

    podcast.append(podcastControls, podcastContent)
    podcastControls.append(podcastImage, podcastLength, podcastPlay)
    podcastContent.append(podcastTitle, podcastDate)
    

    return podcast;
}