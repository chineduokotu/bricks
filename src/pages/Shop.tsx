import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Chip,
  Stack,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const selectedCategory = searchParams.get('category') || '';

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result.sort((a, b) => b.reviews - a.reviews);

    return result;
  }, [selectedCategory]);

  const filters = (
    <Box sx={{ p: isMobile ? 2 : 0 }}>
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Filters</Typography>
          <IconButton onClick={() => setMobileFilterOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      <Typography variant="h6" sx={{ mb: 2, fontSize: '0.8125rem', letterSpacing: '0.1em' }}>
        Category
      </Typography>
      <List dense disablePadding sx={{ mb: 4 }}>
        <ListItem disablePadding>
          <ListItemButton
            selected={!selectedCategory}
            onClick={() => updateParams('category', '')}
            sx={{ py: 0.5 }}
          >
            <ListItemText primary="All" slotProps={{ primary: { variant: 'body2' } }} />
          </ListItemButton>
        </ListItem>
        {categories.map((cat) => (
          <ListItem key={cat} disablePadding>
            <ListItemButton
              selected={selectedCategory === cat}
              onClick={() => updateParams('category', cat)}
              sx={{ py: 0.5 }}
            >
              <ListItemText primary={cat} slotProps={{ primary: { variant: 'body2' } }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Box>
  );

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h3" component="h1">
            {selectedCategory || 'All Furniture'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            {filteredProducts.length} product{filteredProducts.length !== 1 && 's'}
          </Typography>
        </Box>
        {isMobile && (
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            onClick={() => setMobileFilterOpen(true)}
          >
            Filters
          </Button>
        )}
      </Box>

      {/* Active Filters */}
      {selectedCategory && (
        <Stack direction="row" spacing={1} sx={{ mb: 3 }} flexWrap="wrap" useFlexGap>
          <Chip
            label={selectedCategory}
            onDelete={() => updateParams('category', '')}
            size="small"
          />
        </Stack>
      )}

      <Grid container spacing={4}>
        {/* Sidebar Filters */}
        {!isMobile && (
          <Grid item md={3}>
            {filters}
          </Grid>
        )}

        {/* Product Grid */}
        <Grid item xs={12} md={9}>
          {filteredProducts.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
                No products found
              </Typography>
              <Button variant="outlined" onClick={() => setSearchParams({})}>
                Clear Filters
              </Button>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {filteredProducts.map((product) => (
                <Grid item xs={6} md={4} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>

      {/* Mobile Filter Drawer */}
      <Drawer
        anchor="left"
        open={isMobile && mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        PaperProps={{ sx: { width: 300 } }}
      >
        {filters}
      </Drawer>
    </Container>
  );
}
