import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Shared/Footer/Footer";
// import { selectedProduct, removeSelectedProduct } from './redux/actions/productsActions';
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { imageURL, title, price, category, description } = product;
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://obscure-taiga-16258.herokuapp.com/product/${id}`)
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
    <div class="container pt-5 text-center">
      <h2>Product Details</h2>
      {Object.keys(product).length === 0 ? (
        <div className="text-center">
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </button>
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      ) : (
        <div className="text-center" style={{margin: "auto 0"}}>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-6">
                <img className="img-fluid p-5 w-100" src={imageURL} alt="..." />
              </div>
              <div class="col-md-6">
                <div className="pt-5 mt-5">
                  <div class="card-body p-5">
                    <p class="card-title" style={{fontSize: "30px"}}>{title}</p>
                    <p class="card-text" style={{color: "#ECBA78", fontSize: "20px", fontWeight: "bold"}}>{price}</p>
                    <p class="card-text">
                      <small class="text-muted">{category}</small>
                    </p>
                    <p class="card-text">{description}</p>
                    <div className="service-policy">
                      <p>Security policy (edit with Customer reassurance module)</p>
                      <p> Delivery policy (edit with Customer reassurance module)</p>
                      <p>Return policy (edit with Customer reassurance module)</p>
                    </div>
                    <button className="btn-card">
                      <a href="https://bd-bliss.web.app/">Go to Home</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <hr />
      <Footer/>
    </div>
  );
};

export default ProductDetail;
