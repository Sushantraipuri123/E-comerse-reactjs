import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import CircularProgress from '@mui/material/CircularProgress';

import { Link } from 'react-router-dom';

function Men() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
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

  return (
    <div className="container">

      <h1 className='text-center mb-4'> Men's Section</h1>

      {loading ? (
        <div className="d-flex justify-content-center">
          <CircularProgress />
        </div>
      ) : (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {data.map((product) => (
            <div key={product.id} className="col">
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} style={{ height: '300px', objectFit: 'contain' }} className='product-img' />
                <Card.Body>
                  <Card.Title style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{product.title}</Card.Title>
                  <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{product.description}</Card.Text>
                  <strong><span>${product.price}</span></strong>
                  <div className=" mt-3 d-flex justify-content-between">
                    <Link to={`/singlepage/${product.id}`}>
                      <Button variant="outlined">MORE INFO</Button>
                    </Link>

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
  );
}

export default Men;
