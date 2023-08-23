import BookCard from '@/components/BookCard'
import { Container, Grid } from '@/components/GlobalWrapper'
import Content from '@/components/Home/Content'
import { Box } from '@mui/material'
import { getSeries, getBooks } from './lib/api/queries'
import PageTitle from '@/components/PageTitle'

export default async function HomePage() {

const books = await getBooks()
const series = await getSeries()

  
  return (
    <Box>
      <Content/>
      <Container>
        {series.length > 0 && (
          <PageTitle key={series[0]._id} title={series[0].name} />
        )}
        <Grid container spacing={2} mt={5} justifyContent="center">
          {books.map((book)=> <BookCard key={book._id} id={book._id} price={book.price} slug={book.slug.current} description={book.description} image={book.image} title={book.title} urlForBuy={book.urlForBuy}/>)}
        </Grid>
        <Grid container spacing={2} mt={5} justifyContent="center">
        </Grid>
      </Container>
    </Box>
  )
}
