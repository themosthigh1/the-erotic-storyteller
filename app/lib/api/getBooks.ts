import { Book } from "@/app/models/book"
import { client } from "@/sanity/lib/client" 


export const getBooks = async (): Promise<Book[]> => {
    const query = `*[_type == 'book' && slug.current != null] {
        _id, 
        title,
        urlForBuy, 
        slug {current}, 
        image, 
        price, 
        quantity, 
        description, 
        details,
        'series': *[_id == ^.series._ref][0]{
            name,
            slug {current  }
        }
    }`

    const books: Book[] = await client.fetch(query, { cache: 'no-store' })

    return books
}



