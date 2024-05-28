import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import CircularProgress from '@mui/material/CircularProgress';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Modal from 'react-bootstrap/Modal';

import { Link } from 'react-router-dom';

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    lessThan50: false,
    between50And100: false,
    between100And200: false,
    moreThan200: false,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
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

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked,
    }));
  };


  const filteredData = data.filter(product => {
    if (!filters.lessThan50 && !filters.between50And100 && !filters.between100And200 && !filters.moreThan200) {
      return true; 
    }
    if (filters.lessThan50 && product.price <= 50) {
      return true;
    }
    if (filters.between50And100 && product.price > 50 && product.price <= 100) {
      return true;
    }
    if (filters.between100And200 && product.price > 100 && product.price <= 200) {
      return true;
    }
    if (filters.moreThan200 && product.price > 200) {
      return true;
    }
    return false;
  });

 

  return (
    <div className="container">
      <h1 className='text-center '>Our Products</h1>

      <div className="text-end my-4">
      <Button variant="outlined" onClick={handleShow}>
        <FilterAltIcon/>
      </Button>
      </div>

     



      {loading ? (
        <div className="d-flex justify-content-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="row">
          <div>
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     
          
          <div>
            <h5>Price:-</h5>
            <div>
              <input type="checkbox" name="lessThan50" id="lessThan50" checked={filters.lessThan50} onChange={handleFilterChange} />
              <label htmlFor="lessThan50">less than 50</label>
            </div>
            <div>
              <input type="checkbox" name="between50And100" id="between50And100" checked={filters.between50And100} onChange={handleFilterChange} />
              <label htmlFor="between50And100">50 - 100</label>
            </div>
            <div>
              <input type="checkbox" name="between100And200" id="between100And200" checked={filters.between100And200} onChange={handleFilterChange} />
              <label htmlFor="between100And200">100 - 200</label>
            </div>
            <div>
              <input type="checkbox" name="moreThan200" id="moreThan200" checked={filters.moreThan200} onChange={handleFilterChange} />
              <label htmlFor="moreThan200">more than 200</label>
            </div>
            
          </div>
        
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="contained" onClick={handleClose}>Apply</Button>
        </Modal.Footer>
      </Modal>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
              {filteredData.map((product) => (
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
