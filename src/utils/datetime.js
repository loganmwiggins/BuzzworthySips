const EVENT_DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
});

const EVENT_TIME_FORMATTER = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
});

export function formatEventDateLabel(dateInput) {
    const parsedDate = new Date(dateInput);

    if (Number.isNaN(parsedDate.getTime())) {
        return 'Date TBD';
    }

    return EVENT_DATE_FORMATTER.format(parsedDate);
}

function createTimeDate(time24h) {
    const [hoursString, minutesString = '00'] = time24h.split(':');
    const hours = Number(hoursString);
    const minutes = Number(minutesString);

    if (Number.isNaN(hours) || Number.isNaN(minutes)) {
        return null;
    }

    return new Date(2000, 0, 1, hours, minutes);
}

export function formatEventTimeRangeLabel(startTime, endTime) {
    const startDate = createTimeDate(startTime);
    const endDate = createTimeDate(endTime);

    if (!startDate || !endDate) {
        return 'Time TBD';
    }

    return `${EVENT_TIME_FORMATTER.format(startDate)} - ${EVENT_TIME_FORMATTER.format(endDate)}`;
}

export function formatEventRelativeLabel(dateInput) {
    const eventDate = new Date(dateInput);

    if (Number.isNaN(eventDate.getTime())) {
        return 'Date TBD';
    }

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
    const dayDifference = Math.round((eventDay.getTime() - today.getTime()) / 86400000);

    if (dayDifference === 0) {
        return 'Today';
    }

    if (dayDifference === 1) {
        return 'Tomorrow';
    }

    if (dayDifference === -1) {
        return 'Yesterday';
    }

    if (dayDifference > 1 && dayDifference <= 14) {
        return `In ${dayDifference} days`;
    }

    if (dayDifference < -1 && dayDifference >= -14) {
        return `${Math.abs(dayDifference)} days ago`;
    }

    const weeks = Math.round(Math.abs(dayDifference) / 7);

    if (dayDifference > 14) {
        return weeks === 1 ? 'In 1 week' : `In ${weeks} weeks`;
    }

    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
}