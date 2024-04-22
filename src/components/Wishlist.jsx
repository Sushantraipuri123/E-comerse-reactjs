import * as React from 'react';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { grey } from '@mui/material/colors'


export default function Wishlist() {
  return (
   
     
      <Fab disabled aria-label="like">
        <FavoriteIcon  style={{ color: grey[50] }}/>
      </Fab>
   
  );
}