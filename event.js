export default function event(data) {

    let {day, imageSrc, location, month, title, url} = data;

    if (!title || !url) {
        return '';
    }

    const event = document.createElement('div')
    event.classList.add('event')
    // event.src = url /// HOW TO APPEND IF NO CLASS A HREF?


    const imageWrapper = document.createElement('div')
    imageWrapper.classList.add('image-wrapper')

    const eventImage = document.createElement('img')
    eventImage.classList.add('event-image')
    eventImage.src = imageSrc

    const eventContent = document.createElement('div')
    eventContent.classList.add('event-content')

    const eventDate = document.createElement('div')
    eventDate.classList.add('event-date')

    const eventDay = document.createElement('span')
    eventDay.classList.add('event-day')
    eventDay.textContent = day

    const eventmonth = document.createElement('span')
    eventmonth.classList.add('event-month')
    eventmonth.textContent = month

    const eventInfo = document.createElement('div')
    eventInfo.classList.add('event-info')

    const eventLocation = document.createElement('span')
    eventLocation.classList.add('event-location')
    eventLocation.textContent = location;

    const eventTitle = document.createElement('h3')
    eventTitle.classList.add('event-title')
    eventTitle.textContent = title;

    imageWrapper.append(eventImage)
    eventContent.append(eventDate, eventInfo)
    eventDate.append(eventDay, eventmonth)
    eventInfo.append(eventLocation, eventTitle)
    event.append(imageWrapper, eventContent)

    return event;
}