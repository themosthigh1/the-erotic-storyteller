import { Book } from "@/app/models/book"
import { Series } from "@/app/models/series"
import { client } from "@/sanity/lib/client" 


export const getSeries = async (): Promise<Series[]> => {
    const query = `*[_type == 'series'] {
        _id, 
        name, 
        description,
        slug {current},

    }`

    const series: Series[] = await client.fetch(query, { cache: 'no-store' })

    return series
}

export const getBooks = async (): Promise<Book[]> => {
    const query = `*[_type == 'book' && series->name == 'Uncle Mike Series'] {...}`

    const books: Book[] = await client.fetch(query, { cache: 'no-store' })

    return books
}

export const getBooksinSeries = async (slug: string): Promise<Book[]> => {
    const query = `*[_type == 'book' && series->slug.current == '${slug}'] {
        title,
        urlForBuy,
        image, 
        price, 
        slug {current}, 
        quantity, 
        description,
        series->{
            name,
            description
        }
    }`

    const books: Book[] = await client.fetch(query, { cache: 'no-store' })

    return books
}
