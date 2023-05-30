import buttonLarge from "./buttonLarge.js"

export default function videoSectionWrapper(title) {
    const videoSectionWrapper = document.createElement('div')
    videoSectionWrapper.classList.add('video-section-wrapper')

    const sectionTitle = document.createElement('h2')
    sectionTitle.classList.add('section-title')
    sectionTitle.textContent = title

    const videoWrapper = document.createElement('div')
    videoWrapper.classList.add('video-wrapper')
    videoWrapper.src = "https://www.youtube.com/embed/b8dGCsP75HA"




    videoSectionWrapper.append(sectionTitle, videoWrapper, buttonLarge("Visi vaizdo įrašai", "#"))

    return videoSectionWrapper;
}