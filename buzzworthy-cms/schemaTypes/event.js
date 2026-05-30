import {defineField, defineType} from 'sanity';

export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().min(3).max(120),
        }),
        defineField({
            name: 'date',
            title: 'Event Date',
            type: 'date',
            options: {
                dateFormat: 'MMMM D, YYYY',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'startTime',
            title: 'Start Time',
            type: 'string',
            description: 'Use 24-hour HH:mm format, for example 09:30 or 18:00.',
            validation: (Rule) =>
                Rule.required().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
                name: 'time',
                invert: false,
            }),
        }),
        defineField({
            name: 'endTime',
            title: 'End Time',
            type: 'string',
            description: 'Use 24-hour HH:mm format, for example 12:00 or 21:00.',
            validation: (Rule) =>
                Rule.required().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
                name: 'time',
                invert: false,
            }),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(120),
        }),
        defineField({
            name: 'image',
            title: 'Event Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: (Rule) => Rule.required().min(5).max(180),
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured Event',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitleDate: 'date',
            location: 'location',
            media: 'image',
        },
        prepare({title, subtitleDate, location, media}) {
            const subtitle = [subtitleDate, location].filter(Boolean).join(' - ')
            return {
                title,
                subtitle,
                media,
            }
        },
    },
});