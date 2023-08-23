"use client"

import { urlForImage } from "@/sanity/lib/image"
import { Box, Grid, Rating, Typography,Button, Stack, Card } from "@mui/material"
import Image from "next/image"
import PageTitle from "@/components/PageTitle"
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
                  <Image src={urlForImage(image).url()} alt={title} height={209} width={200}/>
                </Box>
                <Box my={1} mx={1} sx={{display: 'flex',justifyContent: 'space-between',
                   alignItems: 'center'
                }}>
                  <Typography variant="body1">{price}</Typography>
                  <Link href={`/book/${slug}`}>
                    <Button variant="contained" size="small">Details</Button>
                  </Link>
                </Box>
              </Card>
            </Grid>
  )
}

export default Content

