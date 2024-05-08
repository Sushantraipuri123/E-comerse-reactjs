import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../App.css';

function Mycart() {
  return (
    <div>
      <h1 className=' text-center align-items-center  mt-2'> <ShoppingBagIcon sx={{ fontSize: 40 }}
      />My Cart</h1>
      <div className="mt-3 container">
       <ul>
        <li>This is my cart</li>
       </ul>
      </div>
    </div>
  )
}

export default Mycart
