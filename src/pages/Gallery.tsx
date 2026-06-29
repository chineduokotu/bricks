import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  Stack,
  Card,
  CardMedia,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { galleryItems, type GalleryItem } from '../data/gallery';

const CATEGORIES = [
  { label: 'All Collections', slug: 'all' },
  { label: 'Living Room', slug: 'Living Room' },
  { label: 'Dining', slug: 'Dining' },
  { label: 'Bedroom', slug: 'Bedroom' },
  { label: 'Workspace', slug: 'Workspace' },
  { label: 'Lighting', slug: 'Lighting' },
  { label: 'Decor', slug: 'Decor' },
];

export default function GalleryPage() {
  useSEO({
    title: 'Furniture Gallery — BRICKS Luxury Furniture Nigeria',
    description:
      'Explore the BRICKS Furniture gallery. Browse stunning photography and videos of our luxury dining sets, living room sofas, bedroom collections, and décor — all crafted for Nigerian homes.',
    keywords:
      'furniture gallery Nigeria, luxury furniture photos, BRICKS furniture gallery, interior design Nigeria, dining set photos, living room sofa Nigeria',
    canonical: '/gallery',
    ogImage: 'https://www.thebrick.com.ng/images/dox26.jpeg',
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [mediaFilter, setMediaFilter] = useState<'all' | 'image' | 'video'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Filter logic
  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesMediaType = mediaFilter === 'all' || item.mediaType === mediaFilter;
    return matchesCategory && matchesMediaType;
  });

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#000000', color: '#zinc-100', pt: { xs: 4, md: 8 }, pb: 12 }}>
      <Container maxWidth="xl">
        
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Box sx={{ w: 40, h: '1px', bgcolor: '#D4AF37', mx: 'auto', mb: 3 }} />
          <Typography
            variant="overline"
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.625rem',
              color: '#D4AF37',
              letterSpacing: '0.25em',
              fontWeight: 600,
              textTransform: 'uppercase',
              display: 'block',
              mb: 1.5,
            }}
          >
            Visual Showcase
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 300,
              letterSpacing: '0.05em',
              color: '#FFFFFF',
              mb: 3,
            }}
          >
            Our Gallery
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: 1.8,
              fontSize: '0.8125rem',
            }}
          >
            Browse through our cinematic videos and high-definition photography of bespoke luxury furniture, conceptualized for refined spaces in Benin City and Lagos.
          </Typography>
        </Box>

        {/* Filters Control Panel */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            py: 3,
            mb: 6,
          }}
        >
          {/* Category Filter */}
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" useFlexGap sx={{ gap: 1 }}>
            {CATEGORIES.map((cat) => (
              <Button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 0,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: activeCategory === cat.slug ? 600 : 400,
                  bgcolor: activeCategory === cat.slug ? '#D4AF37' : 'rgba(255, 255, 255, 0.05)',
                  color: activeCategory === cat.slug ? '#000000' : 'rgba(255, 255, 255, 0.7)',
                  border: '1px solid',
                  borderColor: activeCategory === cat.slug ? '#D4AF37' : 'rgba(255, 255, 255, 0.05)',
                  '&:hover': {
                    bgcolor: activeCategory === cat.slug ? '#C09E30' : 'rgba(255, 255, 255, 0.1)',
                    borderColor: activeCategory === cat.slug ? '#C09E30' : 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                {cat.label}
              </Button>
            ))}
          </Stack>

          {/* Media Type Filter */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              p: 0.5,
            }}
          >
            {([
              { label: 'All Media', value: 'all', icon: null },
              { label: 'Images Only', value: 'image', icon: <ImageIcon sx={{ fontSize: 14 }} /> },
              { label: 'Videos Only', value: 'video', icon: <VideoCameraBackIcon sx={{ fontSize: 14 }} /> },
            ] as const).map((type) => (
              <Button
                key={type.value}
                onClick={() => setMediaFilter(type.value)}
                startIcon={type.icon}
                sx={{
                  px: 2.5,
                  py: 1,
                  borderRadius: 0,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: mediaFilter === type.value ? 500 : 400,
                  bgcolor: mediaFilter === type.value ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  color: mediaFilter === type.value ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.06)',
                    color: 'rgba(255, 255, 255, 0.8)',
                  },
                }}
              >
                {type.label}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* Grid Gallery */}
        {filteredItems.length === 0 ? (
          <Typography sx={{ textAlign: 'center', py: 10, color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.8125rem' }}>
            No media files found matching selected filters.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {filteredItems.map((item) => (
              <Grid item xs={6} sm={4} md={3} key={item.id}>
                <Card
                  onClick={() => setActiveItem(item)}
                  sx={{
                    position: 'relative',
                    aspectRatio: '4/5',
                    bgcolor: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: 0,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    '&:hover .media-item': {
                      transform: 'scale(1.05)',
                    },
                    '&:hover .media-overlay': {
                      opacity: 1,
                    },
                  }}
                >
                  {item.mediaType === 'image' ? (
                    <CardMedia
                      className="media-item"
                      component="img"
                      image={item.url}
                      alt={item.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.9)',
                        transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      }}
                    />
                  ) : (
                    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Box sx={{ position: 'absolute', inset: 0, bgcolor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <video
                          src={item.url}
                          muted
                          playsInline
                          className="media-item"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.6,
                            transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          }}
                        />
                      </Box>
                      {/* Play overlay tag */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          bgcolor: 'rgba(0, 0, 0, 0.75)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#FFFFFF',
                          px: 1,
                          py: 0.25,
                          fontSize: '0.5rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          zIndex: 2,
                        }}
                      >
                        <VideoCameraBackIcon sx={{ fontSize: 8 }} /> Video
                      </Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            bgcolor: 'rgba(0, 0, 0, 0.8)',
                            border: '1px solid rgba(212, 175, 55, 0.4)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#D4AF37',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                            },
                          }}
                        >
                          <PlayArrowIcon sx={{ fontSize: 20 }} />
                        </Box>
                      </Box>
                    </Box>
                  )}

                  {/* Hover Info Overlay */}
                  <Box
                    className="media-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 2.5,
                      zIndex: 3,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#D4AF37',
                        fontSize: '0.5rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {item.category}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 500, mb: 0.5, fontSize: '0.8125rem' }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.5)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        fontSize: '0.6875rem',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Lightbox Dialog Modal */}
        <Dialog
          open={Boolean(activeItem)}
          onClose={() => setActiveItem(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: '#0d0d0d',
              color: '#FFFFFF',
              borderRadius: 0,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 24px 70px rgba(0,0,0,0.8)',
              overflow: 'hidden',
            },
          }}
        >
          {activeItem && (
            <DialogContent sx={{ p: 0, position: 'relative' }}>
              {/* Close Button */}
              <IconButton
                onClick={() => setActiveItem(null)}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  zIndex: 10,
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.9)',
                    color: '#FFFFFF',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              <Grid container sx={{ minHeight: { xs: 400, sm: 500 } }}>
                {/* Media Container */}
                <Grid item xs={12} sm={8} sx={{ bgcolor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {activeItem.mediaType === 'image' ? (
                    <Box
                      component="img"
                      src={activeItem.url}
                      alt={activeItem.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        maxHeight: { xs: 300, sm: 600 },
                        objectFit: 'contain',
                      }}
                    />
                  ) : (
                    <video
                      src={activeItem.url}
                      controls
                      autoPlay
                      style={{
                        width: '100%',
                        height: '100%',
                        maxHeight: '600px',
                        objectFit: 'contain',
                      }}
                    />
                  )}
                </Grid>

                {/* Details Section */}
                <Grid item xs={12} sm={4} sx={{ p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: { sm: '1px solid rgba(255, 255, 255, 0.05)' } }}>
                  <Box>
                    <Box sx={{ width: 24, h: '1px', bgcolor: '#D4AF37', mb: 3 }} />
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#D4AF37',
                        fontSize: '0.625rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        display: 'block',
                        mb: 1.5,
                      }}
                    >
                      {activeItem.category}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 300,
                        color: '#FFFFFF',
                        mb: 2,
                      }}
                    >
                      {activeItem.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        lineHeight: 1.8,
                        fontSize: '0.8125rem',
                      }}
                    >
                      {activeItem.description}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <Button
                      component={RouterLink}
                      to={`/shop?category=${activeItem.category}`}
                      onClick={() => setActiveItem(null)}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        p: 0,
                        minWidth: 0,
                        color: '#D4AF37',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        '&:hover': {
                          color: '#FFFFFF',
                          bgcolor: 'transparent',
                        },
                      }}
                    >
                      Shop Collection
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}
