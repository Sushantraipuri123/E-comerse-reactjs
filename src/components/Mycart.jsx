import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
function Mycart() {
    const carts = useSelector(state => state.cart);

    return (
        <div>
            <h1 className='text-center align-items-center mt-2'>
                <ShoppingBagIcon sx={{ fontSize: 40 }} /> My Cart
            </h1>
            <div className="container mt-3">
                {carts.map(cart => (
                    <div key={cart.id} className='card mb-3'>
                        <div className="row g-0">
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <img src={cart.image} alt={cart.title} className='img-fluid cart-image' style={{ maxWidth: '100px', maxHeight: '100px' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                   <div className="d-flex justify-content-between">
                                   <h5 className="card-title ">{cart.title}</h5>
                                    <p className="card-text text-primary"><strong>${cart.price}</strong></p>
                                   </div>
                                   <div className="d-flex justify-content-between">
                                    <p className="card-text">Quantity: {cart.quantity}</p>
                                    <p className="card-text"><DeleteForeverIcon sx={{ fontSize: 30,color: red[500] }} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mycart;
