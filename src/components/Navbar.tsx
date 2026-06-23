import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Badge,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.png';
import { useCart } from '../hooks/useCart';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openDrawer } = useCart();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            {isMobile && (
              <IconButton
                edge="start"
                onClick={() => setMobileOpen(true)}
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box
              component={RouterLink}
              to="/"
              sx={{
                mr: 'auto',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="BRICKS"
                sx={{ height: 34, width: 'auto' }}
              />
            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1, mr: 4 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.path}
                    component={RouterLink}
                    to={link.path}
                    sx={{
                      color:
                        location.pathname === link.path
                          ? 'primary.main'
                          : 'text.secondary',
                      '&:hover': { color: 'primary.main' },
                      position: 'relative',
                      '&::after':
                        location.pathname === link.path
                          ? {
                              content: '""',
                              position: 'absolute',
                              bottom: 8,
                              left: 32,
                              right: 32,
                              height: 1,
                              bgcolor: 'primary.main',
                            }
                          : {},
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <IconButton sx={{ color: 'text.secondary' }}>
                <SearchIcon />
              </IconButton>
              <IconButton sx={{ color: 'text.secondary' }}>
                <PersonOutlineIcon />
              </IconButton>
              <IconButton
                onClick={openDrawer}
                sx={{ color: 'text.secondary' }}
              >
                <Badge
                  badgeContent={totalItems}
                  color="primary"
                  sx={{
                    '& .MuiBadge-badge': {
                      fontSize: 10,
                      minWidth: 16,
                      height: 16,
                      borderRadius: '50%',
                    },
                  }}
                >
                  <ShoppingBagOutlinedIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: 280, pt: 2, px: 2 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
            px: 1,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="BRICKS"
            sx={{ height: 30, width: 'auto' }}
          />
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.path} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={link.path}
                selected={location.pathname === link.path}
                onClick={() => setMobileOpen(false)}
                sx={{
                  borderRadius: 0,
                  '&.Mui-selected': {
                    bgcolor: 'action.selected',
                  },
                }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
