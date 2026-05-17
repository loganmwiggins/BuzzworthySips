import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../stylesheets/ss-components/home/HomeEvents.css';
import { formatEventDateLabel, formatEventTimeRangeLabel } from '../../utils/datetime';

const EVENTS_PAGE_PATH = '/events';

const SAMPLE_EVENTS = [
    {
        id: 'event-1',
        title: 'Morning Market Pour Over',
        dateISO: '2026-06-06',
        startTime: '09:00',
        endTime: '12:00',
        location: 'Grandview Farmers Market',
        imageSrc: '/assets/events/morning-market.svg',
        imageAlt: 'Buzzworthy market stand setup in the morning',
    },
    {
        id: 'event-2',
        title: 'Twilight Nitro Series',
        dateISO: '2026-06-12',
        startTime: '18:30',
        endTime: '21:00',
        location: 'Franklin Park Conservatory',
        imageSrc: '/assets/events/twilight-series.svg',
        imageAlt: 'Evening event with glowing market stalls',
    },
    {
        id: 'event-3',
        title: 'Sunday Sweet & Savory Pop-Up',
        dateISO: '2026-06-21',
        startTime: '10:30',
        endTime: '14:00',
        location: 'Short North Arts District',
        imageSrc: '/assets/events/weekend-popup.svg',
        imageAlt: 'Weekend popup with bright yellow signage',
    },
    {
        id: 'event-4',
        title: 'Downtown Night Market',
        dateISO: '2026-06-27',
        startTime: '17:00',
        endTime: '22:00',
        location: 'Columbus Commons',
        imageSrc: '/assets/events/night-market.svg',
        imageAlt: 'Night market scene with lit canopy booths',
    },
];

function HomeEvents({ events = SAMPLE_EVENTS }) {
    const navigate = useNavigate();

    const handleOpenFullCalendar = () => {
        navigate(EVENTS_PAGE_PATH);
    };

    return (
        <section id="events" className="home-section home-section-events">
            <div className="home-section-inner">
                <div className="home-section-header">
                    <div className="tal">
                        <p className="p-sm home-section-kicker">Events</p>
                        <h1 className="serif">Where to <i>Find Us</i></h1>
                    </div>
                    <div className="df aic g2">
                        <button className="btn-secondary">
                            <p className="p-sm">Need a Private Event?</p>
                        </button>
                        <button className="btn-action" type="button" onClick={handleOpenFullCalendar}>
                            <p className="p-sm">See All Events</p>
                        </button>
                    </div>
                </div>

                <div className="home-events-scroll" role="list" aria-label="Upcoming event list">
                    {events.map((event) => (
                        <article key={event.id} className="event-card" role="listitem">
                            <img className="event-card-image" src={event.imageSrc} alt={event.imageAlt} loading="lazy" />

                            <div className="event-card-content">
                                <p className="p-sm event-card-date">{formatEventDateLabel(event.dateISO)}</p>
                                <h2 className="event-card-title">{event.title}</h2>
                                <p className="p-sm event-card-time">🕓 {formatEventTimeRangeLabel(event.startTime, event.endTime)}</p>
                                <p className="p-sm event-card-location">📍 {event.location}</p>
                            </div>
                        </article>
                    ))}

                    <button
                        className="event-card event-card-cta"
                        type="button"
                        onClick={handleOpenFullCalendar}
                        aria-label="Open full event calendar"
                    >
                        <span className="event-card-cta-icon" aria-hidden="true">{'->'}</span>
                        <span className="p-sm">See all events</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HomeEvents;
