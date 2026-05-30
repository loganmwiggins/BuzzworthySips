import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatEventDateLabel, formatEventTimeRangeLabel } from '../utils/datetime';
import { fetchAllEvents } from '../utils/cms';

function Events() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

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

    return (
        <div className="page-content-center">
            <div className="content-ctnr">
                <p className="p-sm home-section-kicker">Events</p>
                <h1 className="serif">Full Event Calendar</h1>
                <p className="label">Upcoming + past events from Sanity.</p>

                {events.length > 0 ? (
                    <div className="df fdc g1 w100 tal">
                        {events.map((event) => (
                            <div key={event.id} className="content-ctnr tal ais">
                                <h3 className="serif">{event.title}</h3>
                                <p className="p-sm">{formatEventDateLabel(event.dateISO)}</p>
                                <p className="p-sm">{formatEventTimeRangeLabel(event.startTime, event.endTime)}</p>
                                <p className="p-sm">{event.location}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="label">No events are published yet.</p>
                )}
            </div>

            <button type="button" className="btn-action" onClick={() => navigate('/')}>
                Back to Home
            </button>
        </div>
    );
}

export default Events;