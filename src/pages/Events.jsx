import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatEventDateLabel, formatEventRelativeLabel, formatEventTimeRangeLabel } from '../utils/datetime';
import { fetchAllEvents } from '../utils/cms';

import '../stylesheets/ss-pages/Events.css';

function isPastEvent(dateISO) {
    const eventDate = new Date(dateISO);

    if (Number.isNaN(eventDate.getTime())) {
        return false;
    }

    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());

    return eventDay.getTime() < startOfToday.getTime();
}

function Events() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [showTopFade, setShowTopFade] = useState(false);
    const [showBottomFade, setShowBottomFade] = useState(false);
    const eventsSectionsRef = useRef(null);

    useEffect(() => {
        let isMounted = true;

        const loadEvents = async () => {
            try {
                const nextEvents = await fetchAllEvents();

                if (!isMounted) {
                    return;
                }

                setEvents(nextEvents);
            } catch (error) {
                console.error('Failed to load events from Sanity:', error);
            }
        };

        loadEvents();

        return () => {
            isMounted = false;
        };
    }, []);

    const { upcomingEvents, pastEvents } = useMemo(() => {
        const nextUpcomingEvents = events.filter((event) => !isPastEvent(event.dateISO));
        const nextPastEvents = events.filter((event) => isPastEvent(event.dateISO)).reverse();

        return {
            upcomingEvents: nextUpcomingEvents,
            pastEvents: nextPastEvents,
        };
    }, [events]);

    useEffect(() => {
        const scrollElement = eventsSectionsRef.current;

        if (!scrollElement) {
            return undefined;
        }

        const updateFadeVisibility = () => {
            const { scrollTop, scrollHeight, clientHeight } = scrollElement;
            const maxScrollTop = scrollHeight - clientHeight;

            setShowTopFade(scrollTop > 1);
            setShowBottomFade(maxScrollTop - scrollTop > 1);
        };

        updateFadeVisibility();
        scrollElement.addEventListener('scroll', updateFadeVisibility, { passive: true });
        window.addEventListener('resize', updateFadeVisibility);

        return () => {
            scrollElement.removeEventListener('scroll', updateFadeVisibility);
            window.removeEventListener('resize', updateFadeVisibility);
        };
    }, [events]);

    return (
        <div className="events-page">
            <div className="events-page-shell">
                <div
                    ref={eventsSectionsRef}
                    className={`events-sections${showTopFade ? ' has-top-fade' : ''}${showBottomFade ? ' has-bottom-fade' : ''}`}
                >
                    <section aria-labelledby="upcoming-events-title">
                        <div className="events-section-header">
                            <h2 id="upcoming-events-title" className="serif">Upcoming Events</h2>
                            <p className="p-sm events-count">{upcomingEvents.length} listed</p>
                        </div>

                        {upcomingEvents.length > 0 ? (
                            <div className="events-list" role="list" aria-label="Upcoming events">
                                {upcomingEvents.map((event, index) => (
                                    <article
                                        key={event.id}
                                        className={`events-card events-card-upcoming events-card-tone-${(index % 4) + 1}`}
                                        role="listitem"
                                    >
                                        <div className="events-card-image-wrap">
                                            <span className="events-card-date-pill">{formatEventRelativeLabel(event.dateISO)}</span>
                                            {event.imageSrc ? (
                                                <img
                                                    className="events-card-image"
                                                    src={event.imageSrc}
                                                    alt={event.title}
                                                    draggable="false"
                                                />
                                            ) : null}
                                        </div>

                                        <div className="events-card-content">
                                            <p className="p-sm events-card-meta">{formatEventDateLabel(event.dateISO)}</p>
                                            <h3 className="serif events-card-title">{event.title}</h3>
                                            <p className="p-sm events-card-detail">🕓 {formatEventTimeRangeLabel(event.startTime, event.endTime)}</p>
                                            <p className="p-sm events-card-detail">📍 {event.location}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <p className="label events-empty">No upcoming events are published yet.</p>
                        )}
                    </section>

                    <section aria-labelledby="past-events-title">
                        <div className="events-section-header">
                            <h2 id="past-events-title" className="serif">Past Events</h2>
                            <p className="p-sm events-count">{pastEvents.length} listed</p>
                        </div>

                        {pastEvents.length > 0 ? (
                            <div className="events-list" role="list" aria-label="Past events">
                                {pastEvents.map((event, index) => (
                                    <article
                                        key={event.id}
                                        className={`events-card events-card-past events-card-tone-${(index % 4) + 1}`}
                                        role="listitem"
                                    >
                                        <div className="events-card-image-wrap">
                                            {event.imageSrc ? (
                                                <img
                                                    className="events-card-image"
                                                    src={event.imageSrc}
                                                    alt={event.title}
                                                    draggable="false"
                                                />
                                            ) : null}
                                        </div>

                                        <div className="events-card-content">
                                            <p className="p-sm events-card-meta">{formatEventDateLabel(event.dateISO)}</p>
                                            <h3 className="serif events-card-title">{event.title}</h3>
                                            <p className="p-sm events-card-detail">🕓 {formatEventTimeRangeLabel(event.startTime, event.endTime)}</p>
                                            <p className="p-sm events-card-detail">📍 {event.location}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <p className="label events-empty">No past events yet.</p>
                        )}
                    </section>
                </div>
            </div>

            <div className="events-page-actions">
                <button type="button" className="btn-action" onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default Events;