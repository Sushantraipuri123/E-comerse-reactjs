import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { removeFromCart } from '../features/cartSlice';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Addtocart from './Addtocart';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Mycart() {

  const [totalPrice, setTotalPrice] = useState(0)
  const carts = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    let calculatedTotalPrice = 0;
    carts.forEach(cartItem => {
      calculatedTotalPrice += cartItem.price * cartItem.quantity;
    });
    setTotalPrice(calculatedTotalPrice.toFixed(2));
  }, [carts]);
  
  return (
    <div>
      <h1 className='text-center align-items-center mt-2'>
        <ShoppingBagIcon sx={{ fontSize: 40 }} /> My Cart 
      </h1>
      <div className="container mt-3">
        {carts.length === 0 ? (
          <p className=' text-center display-6 text-danger '> <span className='  me-3'><SentimentVeryDissatisfiedIcon sx={{ fontSize: 40 }}/></span>Your cart is empty.</p>
        ) : (
          carts.map(cart => (
            <div key={cart.id} className='card mb-3'>
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img src={cart.image} alt={cart.title} className='img-fluid cart-image' style={{ maxWidth: '100px', maxHeight: '100px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title ">{cart.title}</h5>
                      <p className="card-text text-primary"><strong>${cart.price}</strong>/pcs</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-text">Quantity: {cart.quantity}</p>
                      <p className="card-text">
                        <Button variant="outlined" onClick={() => dispatch(removeFromCart(cart.id))}>
                          <DeleteForeverIcon sx={{ fontSize: 30, color: red[500] }} />
                        </Button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          ))
        )}
         <div className='position-fixed d-none bottom-0 end-0'>
      <Addtocart cartLength={carts.length}/>

         </div>
      </div>
     <div className="container">
     <Card >
      <Card.Header  className="d-flex justify-content-between">
      <div>
      <h5>Total items</h5>
      </div>
       <div>
       <strong className=' align-items-center me-2'> {carts.length} </strong>
      </div>
      </Card.Header>
      <ListGroup variant="flush">
      <ListGroup.Item>
          <div className="d-flex justify-content-between">
          <div>
      <h5> Discount</h5>
      </div>
       <div>
       <strong className=' align-items-center me-2'> $ 0 </strong>
      </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
          <div>
      <h5> Total Price</h5>
      </div>
       <div>
       <strong className=' align-items-center me-2'> $ {totalPrice} </strong>
      </div>
          </div>
        </ListGroup.Item>
        
      </ListGroup>
      </Card>

     
    
     </div>
   <div className="d-flex justify-content-center my-3">
   <Button variant='contained' disabled={carts.length===0}>
        Place Order
      </Button>
   </div>
    </div>
  );
}

export default Mycart;
