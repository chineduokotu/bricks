import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
  Stack,
} from '@mui/material';
import logo from '../assets/logo.png';

const footerSections = [
  {
    title: 'Shop',
    links: ['Living Room', 'Bedroom', 'Workspace', 'Dining', 'Lighting', 'Decor'],
  },
  {
    title: 'About',
    links: ['Our Story', 'Craftsmanship', 'Sustainability', 'Press', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Contact Us', 'Shipping & Returns', 'Warranty', 'FAQs', 'Product Care'],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1A1A1A',
        color: '#FFFFFF',
        pt: { xs: 6, md: 10 },
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} pb={6}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={logo}
              alt="BRICKS"
               sx={{ height: { xs: 48, md: 68 }, width: 'auto', mb: 2 }}
            />
            <Typography variant="body2" sx={{ color: '#9E9E9E', mb: 3, maxWidth: 320 }}>
              Curated furniture for intentional living. Each piece is designed to last,
              combining thoughtful craftsmanship with timeless design.
            </Typography>
            <Box component="form" sx={{ display: 'flex', gap: 1 }}>
              <TextField
                placeholder="Your email"
                size="small"
                required
                type="email"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255,255,255,0.05)',
                    color: '#FFFFFF',
                    '& fieldset': { borderColor: '#424242' },
                    '&:hover fieldset': { borderColor: '#757575' },
                    '&.Mui-focused fieldset': { borderColor: '#FFFFFF' },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: '#757575',
                    opacity: 1,
                  },
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  color: '#FFFFFF',
                  borderColor: '#FFFFFF',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    borderColor: '#9E9E9E',
                    color: '#9E9E9E',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>

          {footerSections.map((section) => (
            <Grid item xs={6} md={2.66} key={section.title}>
              <Typography
                variant="h6"
                sx={{
                  color: '#FFFFFF',
                  mb: 2,
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    underline="none"
                    sx={{
                      color: '#9E9E9E',
                      fontSize: '0.875rem',
                      '&:hover': { color: '#FFFFFF' },
                      cursor: 'pointer',
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: '#333333', mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { md: 'center' },
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: '#616161' }}>
            &copy; {new Date().getFullYear()} Bricks. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              underline="none"
              sx={{ color: '#616161', fontSize: '0.75rem', '&:hover': { color: '#FFFFFF' } }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{ color: '#616161', fontSize: '0.75rem', '&:hover': { color: '#FFFFFF' } }}
            >
              Terms of Service
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
