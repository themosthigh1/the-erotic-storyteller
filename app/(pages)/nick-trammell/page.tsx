import { Container, Typography } from "@/components/GlobalWrapper";
import PageTitle from "@/components/PageTitle";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const AuthorPage = () => {
  return (
    <Container>
      <PageTitle title={"nIck-tRammell"} />
      <Typography variant="body1">
        Originally from rural South Carolina, nIck tRammell has transformed the
        adult erotica genre for the better. Starting with his acclaimed UNCLE
        MIKE series! Uncle Mike is just one of many erotic short story series
        penned by nIck tRammell. Many tales are pure fantasy– a lot are
        transcripts of actual encounters. Each story guaranteed better then the
        last!
      </Typography>
      <Box mt={5}>
        <Link href="/contact">
          <Button variant="contained">Contact</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default AuthorPage;
