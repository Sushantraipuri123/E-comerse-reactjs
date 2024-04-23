import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import CircularProgress from '@mui/material/CircularProgress';
import Addtocart from './Addtocart';
import '../App.css'
function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
console.log('====================================');
console.log(data, 'aaaaaaaaaaaaaaaaaaaaa');
console.log('====================================');
  return (
    <>
      <div className="container">
        <h1 className='text-center mb-4'>Our Products</h1>

        {loading ? (
          <div className="d-flex justify-content-center">
            <CircularProgress />
          </div>
        ) : (
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            {data.map((product) => (
              <div key={product.id} className="col">
                <Card className="product-card">
                 
                  <Card.Img variant="top" src={product.image} style={{ height: '300px', objectFit: 'contain' }} className='product-img'/>
                  <Card.Body>
                    <Card.Title style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{product.title}</Card.Title>
                    <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{product.description}</Card.Text>
                    <strong><span>${product.price}</span></strong>
                    <div className=" mt-3 d-flex justify-content-between">
                      <Button variant="outlined">Buy Now</Button>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Rating
                          name="text-feedback"
                          value={product.rating.rate}
                          readOnly
                          precision={0.5}
                          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <span className=' ms-2'>{product.rating.rate}</span>
                      </Box>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='position-fixed bottom-0  end-0'>
        <Addtocart />
      </div>
    </>
  );
}

export default Product;
