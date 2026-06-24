import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        bgcolor: '#1A1A1A',
        color: '#FFFFFF',
        px: { xs: 2, md: 4 },
        py: 2.5,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'stretch', sm: 'center' },
        gap: { xs: 2, sm: 3 },
      }}
    >
      <Typography
        variant="body2"
        sx={{ flex: 1, color: 'rgba(255,255,255,0.8)', fontSize: '0.8125rem' }}
      >
        This site uses cookies to improve your experience. By continuing, you agree to our use of cookies.
      </Typography>
      <Box sx={{ display: 'flex', gap: 1.5, flexShrink: 0 }}>
        <Button
          onClick={decline}
          sx={{
            borderRadius: 0,
            color: 'rgba(255,255,255,0.6)',
            borderColor: 'rgba(255,255,255,0.3)',
            border: 1,
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            px: 3,
            py: 1,
            '&:hover': { borderColor: '#FFFFFF', color: '#FFFFFF' },
          }}
        >
          Decline
        </Button>
        <Button
          onClick={accept}
          sx={{
            borderRadius: 0,
            bgcolor: '#FFFFFF',
            color: '#1A1A1A',
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            fontWeight: 600,
            px: 3,
            py: 1,
            '&:hover': { bgcolor: '#f0f0f0' },
          }}
        >
          Accept
        </Button>
      </Box>
    </Box>
  );
}
