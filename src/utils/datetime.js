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