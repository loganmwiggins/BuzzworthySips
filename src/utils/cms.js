import {getSanityImageUrl, sanityClient} from './sanityClient';

const HOME_EVENTS_LIMIT = 4;

const EVENT_FIELDS = `{
    _id,
    title,
    "dateISO": date,
    startTime,
    endTime,
    location,
    image,
    "imageAlt": coalesce(image.alt, title)
}`

const MENU_ITEM_FIELDS = `{
    _id,
    name,
    category,
    description,
    price,
    sortOrder,
    image,
    "imageAlt": coalesce(image.alt, name)
}`

const UPCOMING_EVENTS_QUERY = `*[_type == "event" && date >= $today] | order(date asc, startTime asc) ${EVENT_FIELDS}`;
const ALL_EVENTS_QUERY = `*[_type == "event"] | order(date asc, startTime asc) ${EVENT_FIELDS}`;
const AVAILABLE_MENU_ITEMS_QUERY = `*[_type == "menuItem" && isAvailable == true] | order(sortOrder asc, name asc) ${MENU_ITEM_FIELDS}`;

function mapEvent(doc) {
    return {
        id: doc._id,
        title: doc.title,
        dateISO: doc.dateISO,
        startTime: doc.startTime,
        endTime: doc.endTime,
        location: doc.location,
        imageSrc: getSanityImageUrl(doc.image),
        imageAlt: doc.imageAlt,
    }
}

function mapMenuItem(doc) {
    return {
        id: doc._id,
        name: doc.name,
        category: doc.category,
        description: doc.description,
        price: doc.price,
        imageSrc: getSanityImageUrl(doc.image),
        imageAlt: doc.imageAlt,
    }
}

export async function fetchHomeEvents(limit = HOME_EVENTS_LIMIT) {
    const events = await sanityClient.fetch(UPCOMING_EVENTS_QUERY, {
        today: new Date().toISOString().slice(0, 10),
    })

    return events.slice(0, limit).map(mapEvent);
}

export async function fetchAllEvents() {
    const events = await sanityClient.fetch(ALL_EVENTS_QUERY);
    return events.map(mapEvent);
}

export async function fetchAvailableMenuItems() {
    const menuItems = await sanityClient.fetch(AVAILABLE_MENU_ITEMS_QUERY);
    return menuItems.map(mapMenuItem);
}