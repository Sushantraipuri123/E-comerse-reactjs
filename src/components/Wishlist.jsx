import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/ShoppingCart';
import BookmarkIcon from '@mui/icons-material/ShoppingCart';
import Checkbox from '@mui/material/Checkbox';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function Wishlist() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Fab>
     <IconButton aria-label="cart">
      <StyledBadge badgeContent={44} color="secondary">
      <Checkbox color='secondary'  icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} /> 
      </StyledBadge>
    </IconButton>
    </Fab>
    </Box>
  );
}





