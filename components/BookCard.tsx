import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Stack,
} from "@mui/material";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface BookCardProps {
  id: number;
  title: string;
  price: number;
  image: any;
  slug: any;
  description: string;
  urlForBuy: string;
}

const BookCard: FC<BookCardProps> = (props) => {
  const { id, title, price, description, slug, image, urlForBuy } = props;

  return (
    <Grid item xs={6} sm={6} md={3} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia>
          <Link href={`/book/${slug}`}>
            <Image
              src={urlForImage(image).url()}
              alt="bookcover"
              height={261}
              width={300}
            />
          </Link>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {description}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <b>Price: ${price}</b>
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={1}>
            <Link href={`/book/${slug}`}>
              <Button size="small">Learn More</Button>
            </Link>
            <Link href={urlForBuy}>
              <Button size="small" variant="contained" color="secondary">
                Buy
              </Button>
            </Link>
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BookCard;
