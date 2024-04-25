import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors'
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function Addtocart() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Fab>
    <Link to="/mycarts" >
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={44} color="secondary">
        <ShoppingCartIcon style={{ color: grey[50] }} />
      </StyledBadge>
    </IconButton>
    </Link>
    </Fab>
    </Box>
  );
}





