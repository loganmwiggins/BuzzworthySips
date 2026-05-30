import React from 'react';

function createSkeletonSections(sectionCount, sectionTitles) {
    return Array.from({ length: sectionCount }, (_, index) => ({
        id: `events-skeleton-section-${index + 1}`,
        title: sectionTitles[index] || 'Loading Events',
    }));
}

function EventsSkeleton({
    sectionCount = 2,
    cardsPerSection = 2,
    sectionTitles = ['Upcoming Events', 'Past Events'],
    className = '',
}) {
    const sections = createSkeletonSections(sectionCount, sectionTitles);

    return (
        <div className={`events-skeleton ${className}`.trim()} aria-live="polite" aria-busy="true">
            {sections.map((section, sectionIndex) => (
                <section key={section.id} aria-label={`${section.title} loading`}>
                    <div className="events-section-header">
                        <h2 className="serif">{section.title}</h2>
                        <p className="p-sm events-count">Loading</p>
                    </div>

                    <div className="events-list" role="list" aria-hidden="true">
                        {Array.from({ length: cardsPerSection }, (_, cardIndex) => (
                            <article
                                key={`${section.id}-card-${cardIndex + 1}`}
                                className={`events-card events-card-skeleton events-card-tone-${((sectionIndex + cardIndex) % 4) + 1}`}
                                role="listitem"
                            >
                                <div className="events-card-image-wrap">
                                    <span className="events-card-date-pill events-skeleton-block events-skeleton-pill" />
                                </div>

                                <div className="events-card-content">
                                    <span className="events-skeleton-block events-skeleton-meta" />
                                    <span className="events-skeleton-block events-skeleton-title" />
                                    <span className="events-skeleton-block events-skeleton-detail" />
                                    <span className="events-skeleton-block events-skeleton-detail events-skeleton-detail-short" />
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default EventsSkeleton;
