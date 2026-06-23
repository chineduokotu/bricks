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
  Divider,
  Paper,
  Stack,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCart } from '../hooks/useCart';

export default function CartPage() {
  const { items, totalPrice, updateQuantity, removeItem, clearCart } = useCart();

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
                      width: 120,
                      height: 150,
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  ${(item.product.price * item.quantity).toLocaleString()}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 4,
              border: '1px solid',
              borderColor: 'divider',
              position: 'sticky',
              top: 100,
            }}
          >
            <Typography variant="h6" sx={{ mb: 3 }}>
              Order Summary
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Subtotal
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  ${totalPrice.toLocaleString()}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Shipping
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Calculated at checkout
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  ${totalPrice.toLocaleString()}
                </Typography>
              </Box>
            </Stack>
            <Button
              component={RouterLink}
              to="/checkout"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 3 }}
            >
              Proceed to Checkout
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
