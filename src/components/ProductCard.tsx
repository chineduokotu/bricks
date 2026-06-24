import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Rating,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useCart } from '../hooks/useCart';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, openDrawer } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    openDrawer();
  };

  return (
    <Card
      component={RouterLink}
      to={`/product/${product.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={product.images[0]}
          alt={product.name}
          sx={{
            height: { xs: 200, md: 320 },
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            display: 'flex',
            justifyContent: 'center',
            opacity: { xs: 1, md: isHovered ? 1 : 0 },
            transform: { xs: 'translateY(0)', md: isHovered ? 'translateY(0)' : 'translateY(10px)' },
            transition: 'all 0.3s ease',
            '@media (hover: none)': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          }}
        >
          <IconButton
            onClick={handleAddToCart}
            sx={{
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              width: 44,
              height: 44,
              '&:hover': { bgcolor: 'primary.light' },
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <CardContent sx={{ p: 2.5, flexGrow: 1 }}>
        <Typography
          variant="caption"
          sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}
        >
          {product.category}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500, mb: 0.5 }}>
          {product.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <Rating
            value={product.rating}
            precision={0.1}
            readOnly
            size="small"
            sx={{ '& .MuiRating-icon': { fontSize: 14 } }}
          />
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            ({product.reviews})
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
