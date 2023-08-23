import { Series } from "@/app/models/series"
import { client } from "@/sanity/lib/client" 


export const getSeries = async (slug: string): Promise<Series[]> => {
    const query = `*[_type == 'series'] {
        _id, 
        name, 
        slug {current},
        description
    }`

    const series: Series[] = await client.fetch(query, { cache: 'no-store' })

    return series
}