
"use client"

import { defineType, defineField } from "sanity";

const product = defineType ({
  name: 'series',
  title: 'Series',
  type: 'document',
  fields: [
    defineField
    ({
        name: 'name',
        title: 'Name',
        type: 'string',
    }),
    defineField
    ({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 90,  
        }
    }),
    defineField
    ({
        name: 'description',
        title: 'Description',
        type: 'text',
    }),
  ],
});

export default product