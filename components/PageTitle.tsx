'use client'

import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {
    title: string
}

const PageTitle = ({title}: Props) => {
  return (
    <Box my={5}>
      <Typography variant="h4">
          {title.toUpperCase()}
      </Typography>
    </Box>
  )
}

export default PageTitle
