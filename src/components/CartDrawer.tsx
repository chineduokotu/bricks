import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Stack,
  Select,
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useCart } from '../hooks/useCart';

export default function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    totalPrice,
    updateQuantity,
    removeItem,
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeDrawer();
    navigate('/checkout');
  };

  const handleViewCart = () => {
    closeDrawer();
    navigate('/cart');
  };

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={closeDrawer}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 400 },
          p: 0,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 3,
          pb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Your Cart ({items.length})
        </Typography>
        <IconButton onClick={closeDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      {items.length === 0 ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
            gap: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Your cart is empty
          </Typography>
          <Button variant="outlined" onClick={handleViewCart}>
            Start Shopping
          </Button>
        </Box>
      ) : (
        <>
          <Box sx={{ flex: 1, overflow: 'auto', p: 3 }}>
            <Stack spacing={3}>
              {items.map((item) => (
                <Box key={item.product.id}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      component="img"
                      src={item.product.images[0]}
                      alt={item.product.name}
                      sx={{
                        width: 80,
                        height: 100,
                        objectFit: 'cover',
                        flexShrink: 0,
                      }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                        {item.product.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                        ${item.product.price.toLocaleString()}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Select
                          size="small"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.product.id, Number(e.target.value))
                          }
                          sx={{
                            minWidth: 64,
                            height: 32,
                            '& .MuiSelect-select': { py: 0.5 },
                          }}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <MenuItem key={n} value={n}>
                              {n}
                            </MenuItem>
                          ))}
                        </Select>
                        <IconButton
                          size="small"
                          onClick={() => removeItem(item.product.id)}
                          sx={{ color: 'text.secondary' }}
                        >
                          <DeleteOutlineIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </Typography>
                  </Box>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </Stack>
          </Box>

          <Box sx={{ p: 3, borderTop: '1px solid', borderColor: 'divider' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 2,
              }}
            >
              <Typography variant="body1">Subtotal</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                ${totalPrice.toLocaleString()}
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
              Shipping calculated at checkout
            </Typography>
            <Stack spacing={1.5}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
              <Button
                variant="outlined"
                fullWidth
                size="large"
                onClick={handleViewCart}
              >
                View Cart
              </Button>
            </Stack>
          </Box>
        </>
      )}
    </Drawer>
  );
}
