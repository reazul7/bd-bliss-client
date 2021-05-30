import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { selectedProduct, removeSelectedProduct } from './redux/actions/productsActions';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productsActions';

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {image,titiel,price,category,description} = product
    const {id} = useParams();
    console.log(id)
    const dispatch = useDispatch()
    console.log(product)


    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log('err', err)
            });
            dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if (id && id !== '') fetchProductDetail()
        return () => {
            dispatch(removeSelectedProduct())
        }
    },[id])
    return (
        <div className="container">
        <h2>product details</h2>
        {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
        ) : (
            <div className="card" style= {{width: "18rem", padding:"30px"}} >
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                              <h5 className="card-title">{titiel}</h5>
                              <p className="card-text">{price}</p>
                              <p className="card-text">{category}</p>
                              <p className="card-text">{description}</p>

              <a href="#" className="btn btn-primary">Go to home</a>
            </div>
          </div>
        )}

    </div>
    );
};

export default ProductDetail;