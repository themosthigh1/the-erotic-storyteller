"use client"

import { urlForImage } from "@/sanity/lib/image"
import { Box, Grid, Rating, Typography,Button, Stack } from "@mui/material"
import Image from "next/image"
import { Book } from "@/app/models/book"
import PageTitle from "@/components/PageTitle"
import { FC } from "react"
import Link from "next/link"

interface BookContentProps {
  title: string,
  price: number,
  image: any,
  description: string,
  urlForBuy: string
}

const Content:FC<BookContentProps> = (props) => {

  const {title, price, description, image, urlForBuy } = props
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box>
          <Image src={urlForImage(image).url()} alt={title} height={400} width={500}/>
        </Box>
      </Grid>
    <Grid item xs={12} md={6}>
      <Box><PageTitle title={title}/>
      </Box>
      <Box component={'div'}>
        <Typography variant="h6">
          Author
        </Typography>
        <Typography variant="body1" mb={2}>
          nIck-tRammell
        </Typography>
        <Typography variant="h6">
          Description:
        </Typography>
        <Typography variant="body1" mb={2}>
          {description}
        </Typography>
        <Typography variant="h6" mb={1} mt={1}><b> ${price} </b></Typography>
        <Box mt={1} mb={1}>
          <Stack direction="row" spacing={1}>
            <Link href={urlForBuy}>
              <Button variant="contained">Buy Now</Button>  
            </Link>
          </Stack>
        </Box>  
      </Box>
    </Grid>
  </Grid>
  )
}

export default Content

