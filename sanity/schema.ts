import { type SchemaTypeDefinition } from 'sanity'
import book from './schemas/book'
import contact from './schemas/contact'
import series from './schemas/series'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [book, contact, series],
}
