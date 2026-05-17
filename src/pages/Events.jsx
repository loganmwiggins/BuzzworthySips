import React from 'react';
import { useNavigate } from 'react-router-dom';

function Events() {
    const navigate = useNavigate();

    return (
        <div className="page-content-center">
            <div className="content-ctnr">
                <p className="p-sm home-section-kicker">Events</p>
                <h1 className="serif">Full Event Calendar</h1>
                <p className="label">Upcoming + past events list view is coming next.</p>
            </div>

            <button type="button" className="btn-action" onClick={() => navigate('/')}>
                Back to Home
            </button>
        </div>
    );
}

export default Events;