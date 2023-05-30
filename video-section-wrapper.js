import buttonLarge from "./buttonLarge.js"

export default function videoSectionWrapper(title) {
    const videoSectionWrapper = document.createElement('div')
    videoSectionWrapper.classList.add('video-section-wrapper')

    const sectionTitle = document.createElement('h2')
    sectionTitle.classList.add('section-title')
    sectionTitle.textContent = title

    const videoWrapper = document.createElement('div')
    videoWrapper.classList.add('video-wrapper')

    const videoExtraText = document.createElement('span')
    videoExtraText.classList.add('video-extra-text')
    videoExtraText.textContent = "Jei galiu aš – gali ir tu!"



    videoWrapper.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>`
    videoSectionWrapper.append(sectionTitle, videoWrapper, videoExtraText, buttonLarge("Visi vaizdo įrašai", "#"))

    return videoSectionWrapper;
}