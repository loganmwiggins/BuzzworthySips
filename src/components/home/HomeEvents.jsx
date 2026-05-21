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
        title: 'Sunday Savory Pop-Up',
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

const EVENT_BLURBS = [
    'Community markets',
    'Private catering',
    'Night market energy',
];

function HomeEvents({ events = SAMPLE_EVENTS }) {
    const navigate = useNavigate();

    const handleOpenFullCalendar = () => {
        navigate(EVENTS_PAGE_PATH);
    };

    return (
        <section id="events" className="home-section home-section-events">
            <div className="home-section-inner">
                <div className="home-section-header home-events-header">
                    <div className="home-section-header-title">
                        <p className="p-sm home-section-kicker">Events</p>
                        <h1 className="serif">Where to <i>Find Us</i></h1>
                        {/* <p className="home-section-copy">
                            Give this block a photo later and it becomes a strong secondary story panel.
                            For now, it works as a colorful schedule preview with room for real imagery.
                        </p> */}
                    </div>

                    <div className="home-events-actions">
                        {EVENT_BLURBS.map((blurb) => (
                            <span key={blurb} className="home-events-chip">
                                {blurb}
                            </span>
                        ))}
                        <button className="btn-secondary" type="button">
                            <p className="p-sm">Need a Private Event?</p>
                        </button>
                        <button className="btn-action" type="button" onClick={handleOpenFullCalendar}>
                            <p className="p-sm">See All Events</p>
                        </button>
                    </div>
                </div>

                <div className="home-events-layout">
                    <article className="home-events-feature-panel">
                        <div className="home-events-feature-art">
                            <span>Schedule image placeholder</span>
                        </div>

                        <div className="home-events-feature-copy">
                            <p className="p-sm home-section-kicker">Book us for</p>
                            <h2 className="serif">Market mornings, after-work pop-ups, and private pours.</h2>
                            <p className="p-sm">
                                This block is designed as a hero-supporting story panel. Drop in a real
                                photo of your cart, table, or crowd, and the rest of the page keeps the
                                same lively tone.
                            </p>
                        </div>
                    </article>

                    <div className="home-events-grid" role="list" aria-label="Upcoming event list">
                        {events.map((event, index) => (
                            <article key={event.id} className={`event-card event-card-tone-${(index % 4) + 1}`} role="listitem">
                                <div className="event-card-image-placeholder" aria-hidden="true">
                                    <span>Event image placeholder</span>
                                </div>

                                <div className="event-card-content">
                                    <p className="p-sm event-card-date">{formatEventDateLabel(event.dateISO)}</p>
                                    <h2 className="event-card-title">{event.title}</h2>
                                    <p className="p-sm event-card-time">🕓 {formatEventTimeRangeLabel(event.startTime, event.endTime)}</p>
                                    <p className="p-sm event-card-location">📍 {event.location}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeEvents;
