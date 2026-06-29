import { useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Breadcrumbs,
  Link,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products';
import { useSEO } from '../hooks/useSEO';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const { addItem, openDrawer } = useCart();
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // ── Per-product SEO ──────────────────────────────────────────
  useSEO({
    title: product
      ? `${product.name} — Buy Online | BRICKS Furniture`
      : 'Product Not Found | BRICKS Furniture',
    description: product
      ? `${product.description} Shop the ${product.name} at BRICKS Furniture Nigeria. ${product.material}. Dimensions: ${product.dimensions}.`
      : 'This product could not be found. Explore our full furniture collection.',
    keywords: product
      ? `${product.name}, ${product.category} Nigeria, ${product.material}, buy ${product.category.toLowerCase()} furniture Nigeria, BRICKS furniture`
      : '',
    canonical: product ? `/product/${product.id}` : '/shop',
    ogImage: product
      ? `https://www.thebrick.com.ng${product.images[0]}`
      : 'https://www.thebrick.com.ng/images/dox26.jpeg',
    ogType: 'product',
    structuredData: product
      ? {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: product.images.map(
            (img) => `https://www.thebrick.com.ng${img}`
          ),
          sku: `BRICKS-${product.id}`,
          brand: { '@type': 'Brand', name: 'BRICKS Furniture' },
          material: product.material,
          offers: {
            '@type': 'Offer',
            url: `https://www.thebrick.com.ng/product/${product.id}`,
            priceCurrency: 'NGN',
            price: product.price,
            availability: product.inStock
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
            seller: { '@type': 'Organization', name: 'BRICKS Furniture' },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating,
            reviewCount: product.reviews,
            bestRating: 5,
            worstRating: 1,
          },
          category: product.category,
        }
      : undefined,
  });

  if (!product) {
    return (
      <Container maxWidth="xl" sx={{ py: 12, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Product Not Found
        </Typography>
        <Button component={RouterLink} to="/shop" variant="outlined">
          Back to Shop
        </Button>
      </Container>
    );
  }

  const media = [
    ...product.images.map((url) => ({ type: 'image' as const, url })),
    ...(product.videos || []).map((url) => ({ type: 'video' as const, url })),
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    openDrawer();
  };

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 3, md: 6 } }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          color="text.secondary"
        >
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/shop"
          underline="hover"
          color="text.secondary"
        >
          Shop
        </Link>
        <Link
          component={RouterLink}
          to={`/shop?category=${product.category}`}
          underline="hover"
          color="text.secondary"
        >
          {product.category}
        </Link>
        <Typography color="text.primary">{product.name}</Typography>
      </Breadcrumbs>

      <Button
        component={RouterLink}
        to="/shop"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
        variant="text"
      >
        Back to Shop
      </Button>

      <Grid container spacing={6}>
        {/* Image/Video Media Section */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              width: '100%',
              height: { xs: 280, md: 600 },
              bgcolor: '#F5F5F5',
              mb: 2,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {media[selectedMediaIndex]?.type === 'image' ? (
              <Box
                component="img"
                src={media[selectedMediaIndex].url}
                alt={product.name}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <video
                src={media[selectedMediaIndex]?.url}
                controls
                autoPlay
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </Box>
          <Grid container spacing={1.5}>
            {media.map((item, index) => (
              <Grid item xs={3} key={item.url}>
                <Box
                  onClick={() => setSelectedMediaIndex(index)}
                  sx={{
                    width: '100%',
                    height: { xs: 80, md: 120 },
                    position: 'relative',
                    cursor: 'pointer',
                    border: '2px solid',
                    borderColor:
                      selectedMediaIndex === index ? 'primary.main' : 'transparent',
                    transition: 'border-color 0.2s ease',
                    bgcolor: '#000000',
                    overflow: 'hidden',
                    '&:hover': {
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  {item.type === 'image' ? (
                    <Box
                      component="img"
                      src={item.url}
                      alt={`${product.name} view ${index + 1}`}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                      <video
                        src={item.url}
                        muted
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          bgcolor: 'rgba(0,0,0,0.2)',
                        }}
                      >
                        <PlayCircleOutlineIcon sx={{ fontSize: 28 }} />
                      </Box>
                    </Box>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={5}>
          <Chip
            label={product.inStock ? 'In Stock' : 'Out of Stock'}
            size="small"
            color={product.inStock ? 'default' : 'error'}
            sx={{
              mb: 2,
              bgcolor: product.inStock ? '#E8F5E9' : '#FFEBEE',
              color: product.inStock ? '#2E7D32' : '#C62828',
              borderRadius: 0,
              fontWeight: 500,
              fontSize: '0.75rem',
            }}
          />

          <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
            {product.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Rating value={product.rating} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.rating} ({product.reviews} reviews)
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
            {product.description}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          {/* Quantity Selector */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Quantity
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <IconButton
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                size="small"
                sx={{ borderRadius: 0, px: 1.5 }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography sx={{ minWidth: 40, textAlign: 'center', fontSize: '0.875rem' }}>
                {quantity}
              </Typography>
              <IconButton
                onClick={() => setQuantity(quantity + 1)}
                size="small"
                sx={{ borderRadius: 0, px: 1.5 }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            sx={{ mb: 2 }}
          >
            {product.inStock ? 'Add to Bag' : 'Out of Stock'}
          </Button>

          <Button variant="outlined" fullWidth size="large">
            Add to Wishlist
          </Button>

          {/* Specs Accordion */}
          <Box sx={{ mt: 5 }}>
            <Accordion
              disableGutters
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Dimensions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {product.dimensions}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderTop: 'none',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Materials & Care
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {product.material}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
