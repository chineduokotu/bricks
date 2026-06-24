import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { keyframes } from '@mui/material/styles';
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

const heroImages = [
  `${base}/doxa19.jpeg`,
  `${base}/doxa17.jpeg`,
  `${base}/doxa18.jpeg`,
  `${base}/ps8.jpg`,
];

const categoryImages: Record<string, string> = {
  'Living Room': `${base}/dox3.jpeg`,
  'Bedroom': `${base}/ps6.jpg`,
  'Workspace': `${base}/ps14.jpg`,
  'Dining': `${base}/ps4.jpg`,
  'Lighting': `${base}/us4.jpg`,
  'Decor': `${base}/ps7.jpg`,
};

const bestSellers = products.filter((p) => p.id <= 8);

const zoomIn = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.15); }
`;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '70vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'divider',
          overflow: 'hidden',
          mt: { xs: '-64px', md: '-72px' },
        }}
      >
        {heroImages.map((src, index) => (
          <Box
            key={src}
            component="img"
            src={src}
            alt={`Hero furniture ${index + 1}`}
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: index === activeIndex ? 1 : 0,
              transform: 'scale(1)',
              transition: 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              animation: index === activeIndex ? `${zoomIn} 5s ease-in-out` : 'none',
            }}
          />
        ))}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0, 0, 0, 0.4)',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            px: { xs: 2, md: 8 },
            py: { xs: 6, md: 0 },
            pt: { xs: '64px', md: '72px' },
            maxWidth: 680,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{ mb: 3, color: '#FFFFFF', fontWeight: 600 }}
          >
            Furniture for{' '}
            <Box
              component="span"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic',
                fontWeight: 700,
                display: 'block',
                color: '#FFFFFF',
              }}
            >
              intentional living
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.85)',
              mb: 5,
              maxWidth: 440,
              fontSize: '1.125rem',
              lineHeight: 1.7,
              fontWeight: 500,
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
            sx={{
              borderRadius: 0,
              bgcolor: '#FFFFFF',
              color: '#1A1A1A',
              letterSpacing: '0.1em',
              fontWeight: 700,
              px: { xs: 3, md: 5 },
              py: 1.5,
              '&:hover': { bgcolor: '#f0f0f0' },
            }}
          >
            Explore Collection
          </Button>
        </Box>
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
                    height: { xs: 200, md: 320 },
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
                Best Selling Pieces
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
