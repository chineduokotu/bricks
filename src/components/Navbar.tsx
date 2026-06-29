import { useState, useEffect } from 'react';
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
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../assets/logo.png';
import { useCart } from '../hooks/useCart';

const WHATSAPP_NUMBER = '2349030181800';

const desktopLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const shopCategories = ['Living Room', 'Bedroom', 'Dining', 'Office', 'Accessories'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [shopAnchorEl, setShopAnchorEl] = useState<null | HTMLElement>(null);
  const { totalItems, openDrawer } = useCart();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (!path) return false;
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleShopOpen = (e: React.MouseEvent<HTMLElement>) => {
    setShopAnchorEl(e.currentTarget);
  };

  const handleShopClose = () => {
    setShopAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: isScrolled ? '#FFFFFF' : 'transparent',
          boxShadow: 'none',
          borderBottom: 1,
          borderColor: isScrolled ? 'divider' : 'transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ minHeight: { xs: 64, md: 72 }, justifyContent: 'space-between' }}
          >
            {/* Left: Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            >
              <Box
                component="img"
                src={logo}
                alt="BRICKS"
                sx={{ height: { xs: 48, md: 56 }, width: 'auto' }}
              />
            </Box>

            {/* Center: Desktop Nav */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                {desktopLinks.map((link) => {
                  if (link.label === 'Shop') {
                    return (
                      <Box
                        key={link.label}
                        onMouseEnter={handleShopOpen}
                        onMouseLeave={handleShopClose}
                      >
                        <Box
                          component={RouterLink}
                          to={link.path!}
                          sx={{
                            color: isScrolled ? 'text.primary' : '#FFFFFF',
                            letterSpacing: '0.05em',
                            fontWeight: isActive(link.path!) ? 600 : 400,
                            fontSize: '0.8125rem',
                            textDecoration: 'none',
                            bgcolor: 'transparent',
                            position: 'relative',
                            display: 'inline-flex',
                            alignItems: 'center',
                            px: 0.5,
                            py: 0.5,
                            zIndex: 1500,
                            '&:hover': { bgcolor: 'transparent', opacity: 0.7 },
                            '&::after': isActive(link.path!)
                              ? {
                                  content: '""',
                                  position: 'absolute',
                                  bottom: 4,
                                  left: 0,
                                  right: 0,
                                  height: 1,
                                  bgcolor: isScrolled ? 'primary.main' : '#FFFFFF',
                                }
                              : {},
                          }}
                        >
                          {link.label}
                        </Box>
                        <Menu
                          anchorEl={shopAnchorEl}
                          open={Boolean(shopAnchorEl)}
                          onClose={handleShopClose}
                          MenuListProps={{ onMouseLeave: handleShopClose }}
                          elevation={0}
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                          sx={{
                            mt: 0,
                            zIndex: 1400,
                            '& .MuiPaper-root': {
                              border: '1px solid',
                              borderColor: 'divider',
                              borderRadius: 0,
                              minWidth: 200,
                              mt: '8px',
                              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                              bgcolor: '#FFFFFF',
                            },
                          }}
                        >
                          {shopCategories.map((cat) => (
                            <MenuItem
                              key={cat}
                              component={RouterLink}
                              to={`/shop?category=${cat}`}
                              onClick={handleShopClose}
                              sx={{
                                letterSpacing: '0.05em',
                                fontSize: '0.8125rem',
                                py: 1.5,
                                px: 3,
                                borderRadius: 0,
                              }}
                            >
                              {cat}
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box>
                    );
                  }
                  return link.path ? (
                    <Button
                      key={link.label}
                      component={RouterLink}
                      to={link.path}
                      disableRipple
                      disableFocusRipple
                      sx={{
                        color: isScrolled ? 'text.primary' : '#FFFFFF',
                        letterSpacing: '0.05em',
                        fontWeight: isActive(link.path) ? 600 : 400,
                        fontSize: '0.8125rem',
                        bgcolor: 'transparent',
                        position: 'relative',
                        '&:hover': { bgcolor: 'transparent', opacity: 0.7 },
                        '&:focus-visible, &:focus, &:active, &.Mui-focusVisible': {
                          bgcolor: 'transparent',
                        },
                        '& .MuiTouchRipple-root': {
                          display: 'none',
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  ) : (
                    <Button
                      key={link.label}
                      sx={{
                        color: isScrolled ? 'text.primary' : '#FFFFFF',
                        letterSpacing: '0.05em',
                        fontWeight: 400,
                        fontSize: '0.8125rem',
                        bgcolor: 'transparent',
                        position: 'relative',
                        '&:hover': { bgcolor: 'transparent', opacity: 0.7 },
                      }}
                    >
                      {link.label}
                    </Button>
                  );
                })}
              </Box>
            )}

            {/* Right: Utility Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {isMobile && (
                <IconButton
                  onClick={() => setMobileOpen(true)}
                  sx={{ color: isScrolled ? 'text.primary' : '#FFFFFF' }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <IconButton
                sx={{ color: isScrolled ? 'text.secondary' : 'rgba(255,255,255,0.7)' }}
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                sx={{ color: isScrolled ? 'text.secondary' : 'rgba(255,255,255,0.7)' }}
              >
                <PersonOutlineIcon />
              </IconButton>
              <IconButton
                onClick={openDrawer}
                sx={{ color: isScrolled ? 'text.secondary' : 'rgba(255,255,255,0.7)' }}
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

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: 300, p: 0 },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 3,
              py: 2.5,
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

          <Divider />

          {/* Primary Links */}
          <List sx={{ px: 2, pt: 2 }}>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={RouterLink}
                to="/"
                onClick={() => setMobileOpen(false)}
                selected={location.pathname === '/'}
                sx={{
                  borderRadius: 0,
                  px: 2,
                  py: 1.5,
                  '&.Mui-selected': { bgcolor: 'action.selected' },
                }}
              >
                <ListItemText
                  primary="Home"
                  slotProps={{ primary: { fontWeight: 600, fontSize: '1rem' } }}
                />
              </ListItemButton>
            </ListItem>

            {/* Shop Accordion */}
            <Accordion
              elevation={0}
              disableGutters
              sx={{
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 2,
                  minHeight: 48,
                  '&.Mui-expanded': { minHeight: 48 },
                  '& .MuiAccordionSummary-content': { my: 0 },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: location.pathname.startsWith('/shop') ? 600 : 400,
                    fontSize: '1rem',
                  }}
                >
                  Shop
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 2, pb: 1, pt: 0 }}>
                <List disablePadding>
                  {shopCategories.map((cat) => (
                    <ListItem key={cat} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemButton
                        component={RouterLink}
                        to={`/shop?category=${cat}`}
                        onClick={() => setMobileOpen(false)}
                        sx={{ borderRadius: 0, pl: 3, py: 1 }}
                      >
                        <ListItemText
                          primary={cat}
                          slotProps={{
                            primary: { variant: 'body2', color: 'text.secondary' },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </List>

          <Divider sx={{ opacity: 0.4, mx: 3 }} />

          {/* Secondary Links */}
          <List sx={{ px: 2 }}>
            {[
              { label: 'Gallery', path: '/gallery' },
              { label: 'About', path: '/about' },
              { label: 'Contact', path: '/contact' },
              { label: 'Track Order' },
            ].map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={item.path ? RouterLink : 'div'}
                  {...(item.path ? { to: item.path } : {})}
                  sx={{ borderRadius: 0, px: 2, py: 1 }}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: { variant: 'body2', color: 'text.secondary' },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Bottom Anchor */}
          <Box
            sx={{
              mt: 'auto',
              px: 3,
              py: 3,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              startIcon={<WhatsAppIcon />}
              onClick={() =>
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}`,
                  '_blank'
                )
              }
              sx={{
                borderRadius: 0,
                mb: 2,
                letterSpacing: '0.05em',
                fontSize: '0.8125rem',
              }}
            >
              Contact Us
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <IconButton size="small" sx={{ color: 'text.secondary' }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary' }}>
                <XIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'text.secondary' }}>
                <PinterestIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
