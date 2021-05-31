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
    <div class="container">
      <h2>product details</h2>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div class="card mb-3" style={{ maxWidth: "6000px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img className="img-fluid p-5" src={imageURL} alt="..." />
              </div>
              <div class="col-md-8">
                <div className="pt-5 mt-5">
                  <div class="card-body p-5">
                    <p class="card-title">{title}</p>
                    <p class="card-text">{price}</p>
                    <p class="card-text">
                      <small class="text-muted">{category}</small>
                    </p>
                    <p class="card-text">{description}</p>
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
    </div>
  );
};

export default ProductDetail;
