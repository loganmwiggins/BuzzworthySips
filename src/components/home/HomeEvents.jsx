import React from 'react';
import { useNavigate } from 'react-router-dom';

import EmptyState from '../EmptyState';
import { formatEventDateLabel, formatEventRelativeLabel, formatEventTimeRangeLabel } from '../../utils/datetime';
import '../../stylesheets/ss-components/home/HomeEvents.css';

const EVENTS_PAGE_PATH = '/events';

const EVENT_BLURBS = [
    {
        label: 'Community markets',
        icon: 'assets/icons/events/users-alt.svg'
    },
    {
        label: 'Work events',
        icon: 'assets/icons/events/building.svg'
    },
    {
        label: 'Private catering',
        icon: 'assets/icons/events/glass-cheers.svg'
    },
    {
        label: 'Night market energy',
        icon: 'assets/icons/events/moon.svg'
    },
];

function HomeEvents({ events = [] }) {
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
                        {/* {EVENT_BLURBS.map((blurb) => (
                            <span key={blurb} className="home-events-chip">
                                {blurb}
                            </span>
                        ))} */}
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
                            <img
                                className="home-events-feature-image"
                                src="/assets/images/tent-setup.jpeg"
                                draggable="false"
                                alt="Buzzworthy event setup"
                            />
                        </div>

                        <div className="home-events-feature-copy">
                            <p className="p-sm home-section-kicker">Book us for</p>
                            {/* <h2 className="serif">Markets, events, pop-ups, and private pours</h2> */}
                            <h2 className="serif">Buzzworthy event setups across the Treasure Coast</h2>
                            <br />
                            {EVENT_BLURBS.map((blurb) => (
                                <div key={blurb.label} className="home-events-chip">
                                    <img src={blurb.icon} aria-hidden="true" draggable="false" />
                                    {blurb.label}
                                </div>
                            ))}
                        </div>
                    </article>

                    <div className="home-events-grid" role="list" aria-label="Upcoming event list">
                        {events.map((event, index) => (
                            <article key={event.id} className={`event-card event-card-tone-${(index % 4) + 1}`} role="listitem">
                                <div className="event-card-image-placeholder">
                                    <span className="event-card-date-pill">{formatEventRelativeLabel(event.dateISO)}</span>

                                    {event.imageSrc ? (
                                        <img className="event-card-image" src={event.imageSrc} alt={event.title} draggable="false" />
                                    ) : null}
                                </div>

                                <div className="event-card-content">
                                    <p className="p-sm event-card-date">{formatEventDateLabel(event.dateISO)}</p>
                                    <h2 className="event-card-title">{event.title}</h2>
                                    <p className="p-sm event-card-time">🕓 {formatEventTimeRangeLabel(event.startTime, event.endTime)}</p>
                                    <p className="p-sm event-card-location">📍 {event.location}</p>
                                </div>
                            </article>
                        ))}

                        {events.length === 0 && (
                            <EmptyState
                                icon="📅"
                                headline="No upcoming events posted yet"
                                subline="Check back soon for the next calendar drop."
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeEvents;