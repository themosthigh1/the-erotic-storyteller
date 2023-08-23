import { defineType, defineField } from "sanity";

const contacts = defineType ({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField
    ({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField
    ({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField
    ({
      name: 'message',
      title: 'Message',
      type: 'string',
    }),
  ],
});

export default contacts