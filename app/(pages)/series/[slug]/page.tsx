import { getBooksinSeries } from '@/app/lib/api/queries'
import { Box, Container, Typography } from '@/components/GlobalWrapper'
import PageTitle from '@/components/PageTitle'
import { NextPage } from 'next'

interface BookSeriesPageProps {
    params: {slug: string}
}

const BookSeriesPage: NextPage<BookSeriesPageProps> = 
   async (props: {params: {slug: string} }) => {

    const {params: {slug}} = props
    const books = await getBooksinSeries(slug)
    console.log(books)

  return (
    <Container>
      <PageTitle title={slug} key={slug}/>
      <Box>
        <Typography variant='body1'>
          A brief description of your series goes here.
        </Typography>
      </Box>

      <Box>

      </Box>
    </Container>
  )
}

export default BookSeriesPage
