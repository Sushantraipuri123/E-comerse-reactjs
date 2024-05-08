import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Addtocart from './Addtocart';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from 'react-bootstrap/Card';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'
function Singlepage() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(1);
    const [cart, setCart] = useState([]);
    const [similarProducts, setSimilarProducts] = useState(null);

    useEffect(() => {
        if (!id) return;

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        if (!data || !data.category) return;

        const apiUrl = `https://fakestoreapi.com/products/category/${data.category}?limit=3`;
        console.log("API URL:", apiUrl);

        fetch(apiUrl)
            .then((res) => res.json())
            .then((similarProductsData) => {
                setSimilarProducts(similarProductsData);
            })
            .catch((error) => {
                console.error('Error fetching similar products:', error);
            });
    }, [data]);
    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const handleIncrement = () => {
        if (counter < 10) {
            setCounter(counter + 1);
        }
    };

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
        alert(data.id)
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    return (
        <>
            {loading && (
                <div className="d-flex justify-content-center mt-5">
                    <CircularProgress />
                </div>
            )}
            {!loading && data && (
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                            <img src={data.image} alt="product img" className='align-items-center' height="300px" />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h2>{data.title}</h2>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Rating
                                    name="text-feedback"
                                    value={data.rating.rate}
                                    readOnly
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                <span className='ms-2'>{data.rating.rate}</span>
                            </Box>
                            <div className='mt-2 mb-2 text-primary'><strong>${data.price}</strong></div>
                            <p>
                                {data.description}
                            </p>
                            <div className='d-flex flex-wrap gap-4 mt-3 align-items-center'>
                                <h5>Size:-</h5>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        defaultValue="M"
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="XS" control={<Radio />} label="XS" />
                                        <FormControlLabel value="S" control={<Radio />} label="S" />
                                        <FormControlLabel value="M" control={<Radio />} label="M" />
                                        <FormControlLabel value="L" control={<Radio />} label="L" />
                                        <FormControlLabel value="XL" control={<Radio />} label="XL" />
                                        <FormControlLabel value="XXL" control={<Radio />} label="XXL" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div className='d-flex flex-wrap gap-4 mt-3 align-items-center'>
                                <h5>Quantity:-</h5>
                                <div>
                                    <Button variant="contained" onClick={handleDecrement} disabled={counter === 1}>-</Button>
                                    <span className='ms-3 me-3'>{counter}</span>
                                    <Button variant="contained" onClick={handleIncrement} disabled={counter === 10}>+</Button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Button variant="outlined" onClick={handleClick}>
                                    <AddShoppingCartIcon /> Add to Cart
                                </Button>

                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert
                                        onClose={handleClose}
                                        severity="success"
                                        variant="filled"
                                        sx={{ width: '100%' }}
                                    >
                                        One item added to cart
                                    </Alert>
                                </Snackbar>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!loading && !data && (
                <div>No data found</div>
            )}
            <div className='position-fixed bottom-0 end-0'>
                <Addtocart productId={id} />
            </div>

            <div className="container mt-4">
                <h3>You May Also Like</h3>

                <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                    {similarProducts && similarProducts.map(product => (
                        <div key={product.id} className="col ">
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
        </>
    )
}

export default Singlepage;
