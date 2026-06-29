import { Box, Container, Grid, Typography, Link, Paper, Button, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useSEO } from '../hooks/useSEO';

export default function Contact() {
  const address = '108 Akpakpava Road, beside Keystone Bank, Benin City, Edo State';
  const phone = '09060753966';
  const whatsapp = '09030181800';
  const whatsappLink = 'https://wa.me/2349030181800';

  useSEO({
    title: 'Contact BRICKS Furniture — Visit Our Store | Benin City, Nigeria',
    description:
      'Contact BRICKS Furniture. Visit our showroom at 108 Akpakpava Road, Benin City, Edo State. Call us on 09060753966 or WhatsApp 09030181800. Premium furniture for Nigerian homes.',
    keywords:
      'BRICKS furniture contact, furniture store Benin City, furniture showroom Edo State, buy luxury furniture Nigeria, contact furniture store Nigeria',
    canonical: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'FurnitureStore',
      name: 'BRICKS Furniture',
      url: 'https://www.thebrick.com.ng',
      telephone: '+2349060753966',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '108 Akpakpava Road, beside Keystone Bank',
        addressLocality: 'Benin City',
        addressRegion: 'Edo State',
        addressCountry: 'NG',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+2349060753966',
          contactType: 'customer service',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+2349030181800',
          contactType: 'sales',
        },
      ],
      openingHours: 'Mo-Sa 09:00-18:00',
      priceRange: '₦₦₦',
    },
  });


  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, maxWidth: 620 }}>
          Visit The Brick showroom in Benin City or reach out directly by call or WhatsApp. Our team is ready to help you bring beautiful furniture into your home.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Store Information
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                    <LocationOnIcon color="primary" sx={{ mt: '4px' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', letterSpacing: '0.12em', mb: 0.5 }}>
                        Address
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {address}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                    <PhoneInTalkIcon color="primary" sx={{ mt: '4px' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', letterSpacing: '0.12em', mb: 0.5 }}>
                        Call
                      </Typography>
                      <Link href={`tel:${phone}`} underline="hover" color="text.primary">
                        {phone}
                      </Link>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                    <WhatsAppIcon color="success" sx={{ mt: '4px' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', letterSpacing: '0.12em', mb: 0.5 }}>
                        WhatsApp
                      </Typography>
                      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" underline="hover" color="text.primary">
                        {whatsapp}
                      </Link>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                    <AccessTimeIcon color="primary" sx={{ mt: '4px' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', letterSpacing: '0.12em', mb: 0.5 }}>
                        Hours
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Stack>

                <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    href={`tel:${phone}`}
                    variant="contained"
                    sx={{ borderRadius: 0, textTransform: 'none' }}
                  >
                    Call Now
                  </Button>
                  <Button
                    component={Link}
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{ borderRadius: 0, textTransform: 'none' }}
                  >
                    Message on WhatsApp
                  </Button>
                </Box>
              </Paper>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', minHeight: 420, boxShadow: 3 }}>
              <iframe
                title="The Brick Location"
                src="https://maps.google.com/maps?q=108%20Akpakpava%20road%20beside%20keystone%20bank%20benin%20city%20edo%20state&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                allowFullScreen
                loading="lazy"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
