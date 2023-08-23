'use client'

import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ContactForm from './ContactForm'
import PageTitle from '@/components/PageTitle'

const Content = () => {
  return (
    <Container>
        <PageTitle title={'Contact Us'}/>
        <Box>
        <ContactForm/>
        </Box>
    </Container>
  )
}

export default Content
