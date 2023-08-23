"use client"

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import FooterSection from './FooterSection';

function Copyright() {
  return (
    <Typography variant="body1" color={'white'} gutterBottom>
      {'Copyright © '}
      <Link color="inherit" href="/studio">
        The Erotic Storyteller
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
      <Box mt={5}>
        <FooterSection/>
        <Box
          textAlign='center'
          component="div"
          sx={{
            py: 5,
            px: 2,
            mt: 'auto',
            backgroundColor: '#514545'
          }}
        >
          <Container>
            <Box>
              <Copyright />
            </Box>
            <Box sx={{'& > :not(style)': {m: 1,},}}>
              <Link href={'https://www.facebook.com/profile.php?id=100090843807874&mibextid=9R9pXO'}>
                <FacebookIcon color='secondary' fontSize='medium'/>
              </Link>
              <Link href={'/'}>
                <TwitterIcon color='secondary' fontSize='medium'/>
              </Link>
              <Link href={'/'}>
                <InstagramIcon color='secondary' fontSize='medium'/>
              </Link>   
            </Box>
          </Container>
        </Box>
      </Box>
  );
}

