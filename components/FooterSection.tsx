"use client"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function FooterSection() {
  return (
      <Box mt={5}>
        <Box
          textAlign='center'
          component="div"
          sx={{
            py: 5,
            px: 2,
            mt: 'auto',
            backgroundColor: '#b68116'
          }}
        >
          <Container>
            <Box sx={{'& > :not(style)': {m: 1,},}}>
                <Typography variant='h4'>
                    Cashapp ApplePay Venmo Zelle payments available
                </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
  );
}

