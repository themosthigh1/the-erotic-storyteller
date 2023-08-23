
import { client } from "@/sanity/lib/client"
import Content from "./Content"
import { Box, Container } from "@/components/GlobalWrapper"
import { Book } from "@/app/models/book"
import { NextPage } from "next"

interface BookSeriesPageProps {
  params: {slug: string}
}

const BookDetailsPage: NextPage<BookSeriesPageProps> = async(props: {params: {slug: string} }) => {
  const {params: {slug}} = props
  const query = `*[_type == "book" && slug.current == $slug][0]{...}`
  const book: Book= await client.fetch(query, {slug})

  return (
    <Box mt={5}>
      <Container>
        <Content title={book.title} price={book.price} image={book.image} description={book.description} urlForBuy={book.urlForBuy} />
      </Container>
    </Box>

  )
}

export default BookDetailsPage
