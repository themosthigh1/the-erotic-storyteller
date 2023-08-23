
import { client } from "@/sanity/lib/client"
import Content from "./Content"
import { Box, Container, Grid } from "@/components/GlobalWrapper"
import { Book } from "@/app/models/book"
import { NextPage } from "next"
import { Key } from "react"
import PageTitle from "@/components/PageTitle"


const BookPage = async() => {
  const query = `*[_type == "book"]{...}`
  const books: Book= await client.fetch(query)

  return (
    <Box>
      <Container>
        <PageTitle title={'Books'}/>
      </Container>
      <Grid container spacing={2} mt={5} justifyContent="center">
        {books.map((book: { _id: Key | null | undefined; price: number; slug: { current: any }; description: string; image: any; title: string; urlForBuy: string })=><Content key={book._id} price={book.price} description={book.description} image={book.image} title={book.title} slug={book.slug.current} urlForBuy={book.urlForBuy}/>)}
      </Grid>
    </Box>

  )
}

export default BookPage
