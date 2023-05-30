import podcastsWrapper from './podcasts-wrapper.js';
import eventsWrapper from './events-wrapper.js';


export default function sidebarContent(podcastData, eventsData) {
    const sidebarContent = document.createElement('aside')
    sidebarContent.classList.add('sidebar-content')

    const podcasts = podcastsWrapper("Podcastai ir radijo laidos", podcastData);
    const events = eventsWrapper("Renginiai", eventsData);

    sidebarContent.append(podcasts, events)

    return sidebarContent;
}