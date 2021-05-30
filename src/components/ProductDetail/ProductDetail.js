import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { selectedProduct, removeSelectedProduct } from './redux/actions/productsActions';
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, titiel, price, category, description } = product;
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (id && id !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);
  return (
    <div class="container">
      <h2>product details</h2>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        //     <div class="card" style= {{width: "18rem", padding:"30px"}} >
        //     <img src={image} class="card-img-top" alt="..."/>
        //     <div class="card-body">
        //                       <h5 class="card-title">{titiel}</h5>
        //                       <p class="card-text">{price}</p>
        //                       <p class="card-text">{category}</p>
        //                       <p class="card-text">{description}</p>

        //       <a href="#" class="btn btn-primary">Go to Home</a>
        //     </div>
        //   </div>
        <div>
          <div class="card mb-3" style={{maxWidth: "540px"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={image} alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{titiel}</h5>
                  <p class="card-text">{price}</p>
                  <p class="card-text">
                    <small class="text-muted">{category}</small>
                  </p>
                  <p class="card-text">{description}</p>
                  <a href="#" class="btn btn-primary">Go to Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
