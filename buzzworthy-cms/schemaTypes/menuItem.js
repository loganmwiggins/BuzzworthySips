import {defineField, defineType} from 'sanity';

export const menuItemType = defineType({
    name: 'menuItem',
    title: 'Menu Item',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(100),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(80),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().min(5).max(240),
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Use a number like 4.5 for $4.50.',
            validation: (Rule) => Rule.required().positive().precision(2),
        }),
        defineField({
            name: 'image',
            title: 'Menu Item Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'isAvailable',
            title: 'Currently Available',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'sortOrder',
            title: 'Sort Order',
            type: 'number',
            initialValue: 0,
            validation: (Rule) => Rule.required().integer().min(0),
        }),
    ],
    orderings: [
        {
            title: 'Sort Order (Ascending)',
            name: 'sortOrderAsc',
            by: [{field: 'sortOrder', direction: 'asc'}],
        },
    ],
    preview: {
        select: {
            title: 'name',
            category: 'category',
            price: 'price',
            media: 'image',
        },
        prepare({title, category, price, media}) {
            const hasPrice = typeof price === 'number'
            const formattedPrice = hasPrice ? `$${price.toFixed(2)}` : null
            const subtitle = [category, formattedPrice].filter(Boolean).join(' - ')

            return {
                title,
                subtitle,
                media,
            }
        },
    },
});