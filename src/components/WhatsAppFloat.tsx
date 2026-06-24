import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WHATSAPP_NUMBER = '2349030181800';

export default function WhatsAppFloat() {
  return (
    <Fab
      onClick={() =>
        window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')
      }
      sx={{
        position: 'fixed',
        bottom: { xs: 24, md: 32 },
        right: { xs: 16, md: 24 },
        zIndex: 1200,
        bgcolor: '#25D366',
        color: '#FFFFFF',
        width: { xs: 52, md: 60 },
        height: { xs: 52, md: 60 },
        '&:hover': { bgcolor: '#1DA851' },
        '& .MuiFab-icon': { width: { xs: 26, md: 30 }, height: { xs: 26, md: 30 } },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: { xs: 26, md: 30 } }} />
    </Fab>
  );
}
