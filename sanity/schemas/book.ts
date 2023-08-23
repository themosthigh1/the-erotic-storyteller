
"use client"

import { defineType, defineField, defineArrayMember } from "sanity";

const product = defineType ({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField
    ({
        name: 'title',
        title: 'Name',
        type: 'string',
    }),
    ({
        name: 'image',
        title: 'Image',
        type: 'image',
        validation: (Rule: any) => Rule.required(),

    }),
    ({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 90,  
        }
    }),
    defineField
    ({
        name: 'price',
        title: 'Price',
        type: 'number',
    }),
    defineField
    ({
        name: 'details',
        title: 'Details',
        type: 'string',
    }),
    defineField
    ({
        name: 'description',
        title: 'Description',
        type: 'text',
    }), 
    defineField
    ({
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
        validation: (Rule: any) => Rule.required().integer().min(0),

    }),
    defineField
    ({
        name: 'series',
        title: 'Series',
        type: 'reference',
        to: [{type: 'series'}]
    }),
    defineField
    ({
        name: 'urlForBuy',
        title: 'Buy Link',
        type: 'string',
    }),
  ],
});

export default product