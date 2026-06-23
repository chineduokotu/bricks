import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Stack,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCart } from '../hooks/useCart';

const steps = ['Shipping', 'Payment', 'Review'];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    phone: '',
  });

  const [payment, setPayment] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const isShippingValid = () => {
    return Object.values(shipping).every((v) => v.trim() !== '');
  };

  const isPaymentValid = () => {
    return Object.values(payment).every((v) => v.trim() !== '');
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handlePlaceOrder = () => {
    clearCart();
    navigate('/');
  };

  const renderShipping = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Shipping Address
      </Typography>
      <Grid container spacing={2.5}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={shipping.firstName}
            onChange={handleShippingChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={shipping.lastName}
            onChange={handleShippingChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={shipping.address}
            onChange={handleShippingChange}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={shipping.city}
            onChange={handleShippingChange}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="State"
            name="state"
            value={shipping.state}
            onChange={handleShippingChange}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="ZIP Code"
            name="zipCode"
            value={shipping.zipCode}
            onChange={handleShippingChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={shipping.email}
            onChange={handleShippingChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            type="tel"
            value={shipping.phone}
            onChange={handleShippingChange}
            required
          />
        </Grid>
      </Grid>
    </Box>
  );

  const renderPayment = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Payment Details
      </Typography>
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Card Number"
            name="cardNumber"
            value={payment.cardNumber}
            onChange={handlePaymentChange}
            placeholder="0000 0000 0000 0000"
            required
            inputProps={{ maxLength: 19 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name on Card"
            name="cardName"
            value={payment.cardName}
            onChange={handlePaymentChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Expiry Date"
            name="expiryDate"
            value={payment.expiryDate}
            onChange={handlePaymentChange}
            placeholder="MM/YY"
            required
            inputProps={{ maxLength: 5 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="CVV"
            name="cvv"
            value={payment.cvv}
            onChange={handlePaymentChange}
            placeholder="123"
            required
            inputProps={{ maxLength: 4 }}
            type="password"
          />
        </Grid>
      </Grid>
    </Box>
  );

  const renderReview = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Review Your Order
      </Typography>

      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Shipping To
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        {shipping.firstName} {shipping.lastName}
        <br />
        {shipping.address}
        <br />
        {shipping.city}, {shipping.state} {shipping.zipCode}
        <br />
        {shipping.email}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Items ({items.length})
      </Typography>
      <Stack spacing={2} sx={{ mb: 3 }}>
        {items.map((item) => (
          <Box
            key={item.product.id}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography variant="body2">
              {item.product.name} x{item.quantity}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              ${(item.product.price * item.quantity).toLocaleString()}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          ${totalPrice.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <Button
        component={RouterLink}
        to="/cart"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
      >
        Back to Cart
      </Button>

      <Typography variant="h3" sx={{ mb: 6 }}>
        Checkout
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Stepper
            activeStep={activeStep}
            sx={{ mb: 6 }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Paper sx={{ p: 4, border: '1px solid', borderColor: 'divider' }}>
            {activeStep === 0 && renderShipping()}
            {activeStep === 1 && renderPayment()}
            {activeStep === 2 && renderReview()}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button
                variant="outlined"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={
                    (activeStep === 0 && !isShippingValid()) ||
                    (activeStep === 1 && !isPaymentValid())
                  }
                >
                  Next
                </Button>
              )}
            </Box>
          </Paper>
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
              {items.map((item) => (
                <Box
                  key={item.product.id}
                  sx={{ display: 'flex', gap: 2 }}
                >
                  <Box
                    component="img"
                    src={item.product.images[0]}
                    alt={item.product.name}
                    sx={{
                      width: 56,
                      height: 70,
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {item.product.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Qty: {item.quantity}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    ${(item.product.price * item.quantity).toLocaleString()}
                  </Typography>
                </Box>
              ))}
            </Stack>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1">Subtotal</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                ${totalPrice.toLocaleString()}
              </Typography>
            </Box>
            <Typography
              variant="caption"
              sx={{ color: 'text.secondary', display: 'block', mt: 1 }}
            >
              Shipping calculated at checkout
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
