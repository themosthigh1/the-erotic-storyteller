"use client"

import { urlForImage } from "@/sanity/lib/image"
import { Box, Grid, Rating, Typography,Button, Stack, Card } from "@mui/material"
import Image from "next/image"
import { FC } from "react"
import Link from "next/link"

interface BookContentProps {
  title: string,
  price: number,
  image: any,
  description: string,
  urlForBuy: string,
  slug: any
}

const Content:FC<BookContentProps> = (props) => {

  const {title, price, description, image, urlForBuy, slug } = props
  
  return (
            <Grid item>
              <Card>
                <Box sx={{ boxShadow: 2, width: '200px', height: '209px', }}>
                  <Link href={`/book/${slug}`}>
                  <Image src={urlForImage(image).url()} alt={title} height={209} width={200}/>
                  </Link>
                </Box>
                <Box my={1} mx={1} sx={{display: 'flex',justifyContent: 'space-between',
                   alignItems: 'center'
                }}>
                  <Typography variant="body1">
                    <b>{price}</b>
                    </Typography>
                  <Link href={urlForBuy}>
                    <Button variant="contained" size="small">Buy</Button>
                  </Link>
                </Box>
              </Card>
            </Grid>
  )
}

export default Content

