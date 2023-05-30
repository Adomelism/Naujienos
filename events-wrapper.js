import {EVENTS_DATA} from "./config.js"
import event from "./event.js"

export default function eventsWrapper(title) {
    const eventsWrapper = document.createElement('div')
    eventsWrapper.classList.add('events-wrapper')

    const sectionTitle = document.createElement('h2')
    sectionTitle.classList.add('section-title')
    sectionTitle.textContent = title

    const eventsList = document.createElement('div')
    eventsList.classList.add('events-list')

    EVENTS_DATA.forEach(eventData => {
        eventsList.append(event(eventData))
    })

    eventsWrapper.append(sectionTitle, eventsList)

    return eventsWrapper;
}
