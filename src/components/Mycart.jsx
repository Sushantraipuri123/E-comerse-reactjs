import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

function Mycart() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        if (!id) return;

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, [id]);

    return (
        <div>
            <h1>This is My Cart</h1>
            {/* Render product details if data is available */}
            {data && (
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                            <img src={data.image} alt="product img" className='align-items-center' height="300px" />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h2>{data.title}</h2>
                            {/* Render other product details here */}
                        </div>
                    </div>
                </div>
            )}
            {/* Render loading spinner while data is being fetched */}
            {loading && (
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Mycart;

