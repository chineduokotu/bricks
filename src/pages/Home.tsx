import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const base = '/images';

const categoryImages: Record<string, string> = {
  'Living Room': `${base}/us7.jpg`,
  'Bedroom': `${base}/ps13.jpg`,
  'Workspace': `${base}/ps14.jpg`,
  'Dining': `${base}/ps4.jpg`,
  'Lighting': `${base}/us4.jpg`,
  'Decor': `${base}/ps7.jpg`,
};

const bestSellers = products.filter((p) => p.id <= 8);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: '80vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  mb: 3,
                  maxWidth: 600,
                }}
              >
                Furniture for
                <Box component="span" sx={{ display: 'block', fontStyle: 'italic', fontWeight: 300 }}>
                  intentional living
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 5,
                  maxWidth: 440,
                  fontSize: '1.125rem',
                }}
              >
                Curated pieces designed to bring balance and beauty to your space.
                Crafted to last, made to be loved.
              </Typography>
              <Button
                component={RouterLink}
                to="/shop"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Explore Collection
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 400, md: 600 },
                  bgcolor: '#EEEEEE',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={`${base}/us7.jpg`}
                  alt="Hero furniture"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Collections */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            component="h2"
            sx={{ mb: 2, textAlign: 'center' }}
          >
            Featured Collections
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              mb: 6,
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            Explore our thoughtfully curated categories, each designed to inspire
            a more intentional home.
          </Typography>
          <Grid container spacing={3}>
            {categories.slice(0, 6).map((cat) => (
              <Grid item xs={6} md={4} key={cat}>
                <Card
                  component={RouterLink}
                  to={`/shop?category=${cat}`}
                  sx={{
                    position: 'relative',
                    height: 320,
                    textDecoration: 'none',
                    color: 'inherit',
                    border: '1px solid',
                    borderColor: 'divider',
                    overflow: 'hidden',
                    '&:hover .category-image': {
                      transform: 'scale(1.05)',
                    },
                    '&:hover .category-overlay': {
                      opacity: 0.3,
                    },
                  }}
                >
                  <CardMedia
                    className="category-image"
                    component="img"
                    height="100%"
                    image={categoryImages[cat]}
                    alt={cat}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                  />
                  <Box
                    className="category-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: '#000',
                      opacity: 0.15,
                      transition: 'opacity 0.4s ease',
                    }}
                  />
                  <CardContent
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: '#FFFFFF', fontWeight: 400 }}
                    >
                      {cat}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Best Sellers */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              mb: 6,
            }}
          >
            <Box>
              <Typography variant="h3" component="h2" sx={{ mb: 1 }}>
                Best Sellers
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 400 }}>
                Our most beloved pieces, chosen by customers who value quality
                and enduring design.
              </Typography>
            </Box>
            <Button
              component={RouterLink}
              to="/shop"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              View All
            </Button>
          </Box>
          <Grid container spacing={3}>
            {bestSellers.map((product) => (
              <Grid item xs={6} md={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
