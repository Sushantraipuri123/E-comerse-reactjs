    import React, { useState, useEffect } from 'react';
    import Box from '@mui/material/Box';
    import Rating from '@mui/material/Rating';
    import StarIcon from '@mui/icons-material/Star';
    import Addtocart from './Addtocart';
    import Radio from '@mui/material/Radio';
    import RadioGroup from '@mui/material/RadioGroup';
    import FormControlLabel from '@mui/material/FormControlLabel';
    import FormControl from '@mui/material/FormControl';
    import Button from '@mui/material/Button';
    import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress
    import { useParams } from 'react-router-dom'; 

    function Singlepage() {
        const { id } = useParams();
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true); 
        const [counter, setCounter] = useState(1);

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

        return (
            <>
                {loading && ( // Show CircularProgress if loading state is true
                    <div className="d-flex justify-content-center mt-5">
                        <CircularProgress />
                    </div>
                )}
                {!loading && data && ( // Render content if loading is false and data is available
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
                            </div>
                        </div>
                    </div>
                )}
                {!loading && !data && ( // Render nothing if loading is false but data is not available
                    <div>No data found</div>
                )}
                <div className='position-fixed bottom-0 end-0'>
                    <Addtocart productId={id} />
                </div>
            </>
        )
    }

    export default Singlepage;
