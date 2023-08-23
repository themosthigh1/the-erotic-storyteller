import { Box, Container, Typography } from '@mui/material'
import Header from './Header'

const Content = () => {
  return (
    <div>
      <Header post={{
        description: '',
        image: '/header.jpg',
        imageText: 'The Erotic Storryteller',
        linkText: '',
        title: ''
      }}/>
      <Container>
        <Box my={5} display={'flex'} sx={{backgroundColor: '#b68116'}}>
          <Box p={5} sx={{ alignItems: 'center' }}>
            <Typography variant={'h5'}>
              Welcome to those dirty little tales you gotta read to believe. Written exclusively by mister erotica, nIck tRammell! All eBooks are full of color pictures and bonuses! New eBooks added twice a month. Please stay tuned!
            </Typography>
          </Box>
        </Box>
      </Container>

    </div>
  )
}

export default Content
