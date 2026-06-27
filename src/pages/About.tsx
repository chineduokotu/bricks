import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function About() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" sx={{ mb: 3 }}>
              About The Brick
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, maxWidth: 680 }}>
              The Brick is a thoughtfully curated furniture brand built for modern living.
              We design every piece with durability, comfort, and timeless style in mind,
              helping homes feel inviting, functional, and beautifully balanced.
            </Typography>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Our mission
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                To create furniture experiences that are personal, elevated, and accessible.
                From our showroom in Benin City to your home, we blend craftsmanship with
                practical design so every piece supports the way you live.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                What we stand for
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Quality materials. Honest pricing. Exceptional service. And a collection
                that makes it easy to style your space with confidence.
              </Typography>
            </Stack>
            <Button
              component={RouterLink}
              to="/shop"
              variant="contained"
              sx={{ mt: 4, borderRadius: 0, px: 4, py: 1.5 }}
            >
              Explore the Collection
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/about-hero.jpg"
              alt="About The Brick"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, minHeight: 420 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
