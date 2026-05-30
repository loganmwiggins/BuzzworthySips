import React from 'react';
import '../stylesheets/ss-components/EmptyState.css';

function EmptyState({ icon, headline, subline, className = '' }) {
    return (
        <div className={`empty-state ${className}`.trim()}>
            {icon && <span className="empty-state-icon" aria-hidden="true">{icon}</span>}
            {headline && <p className="empty-state-headline">{headline}</p>}
            {subline && <p className="p-sm empty-state-subline">{subline}</p>}
        </div>
    );
}

export default EmptyState;