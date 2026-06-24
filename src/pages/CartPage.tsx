import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  Select,
  MenuItem,
  Paper,
  Stack,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useCart } from '../hooks/useCart';

const WHATSAPP_NUMBER = '2349030181800';

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    const itemLines = items
      .map((item) => `- ${item.product.name} x${item.quantity}`)
      .join('\n');
    const message = encodeURIComponent(
      `Hi, I'd like to order:\n\nItems:\n${itemLines}\n\nThank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <Container maxWidth="xl" sx={{ py: 12, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Your Cart is Empty
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          Looks like you haven't added anything yet.
        </Typography>
        <Button
          component={RouterLink}
          to="/shop"
          variant="contained"
          size="large"
        >
          Start Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <Button
        component={RouterLink}
        to="/shop"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
      >
        Continue Shopping
      </Button>

      <Typography variant="h3" sx={{ mb: 6 }}>
        Shopping Cart ({items.length})
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            {items.map((item) => (
              <Paper
                key={item.product.id}
                sx={{
                  display: 'flex',
                  gap: 3,
                  p: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box
                  component={RouterLink}
                  to={`/product/${item.product.id}`}
                  sx={{ flexShrink: 0, textDecoration: 'none' }}
                >
                  <Box
                    component="img"
                    src={item.product.images[0]}
                    alt={item.product.name}
                    sx={{
                      width: { xs: 80, md: 120 },
                      height: { xs: 100, md: 150 },
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    component={RouterLink}
                    to={`/product/${item.product.id}`}
                    variant="h6"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      mb: 0.5,
                      '&:hover': { color: 'text.secondary' },
                    }}
                  >
                    {item.product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {item.product.category}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Select
                      size="small"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.product.id, Number(e.target.value))
                      }
                      sx={{ minWidth: 72, height: 36, borderRadius: 0 }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <MenuItem key={n} value={n}>
                          {n}
                        </MenuItem>
                      ))}
                    </Select>
                    <IconButton
                      onClick={() => removeItem(item.product.id)}
                      sx={{ color: 'text.secondary' }}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              border: '1px solid',
              borderColor: 'divider',
              position: 'sticky',
              top: 100,
            }}
          >
            <Typography variant="h6" sx={{ mb: 3 }}>
              Order Summary
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              {items.length} item{items.length !== 1 ? 's' : ''} in your cart
            </Typography>
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleWhatsAppOrder}
              endIcon={<WhatsAppIcon />}
              sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#1DA851' } }}
            >
              Order via WhatsApp
            </Button>
            <Button
              variant="text"
              fullWidth
              sx={{ mt: 1 }}
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
