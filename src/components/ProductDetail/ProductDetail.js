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
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { RiArrowLeftRightFill } from "react-icons/ri";


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
      <h1 className="text-color text-center">Product Details</h1>
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
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img className="img-responsive img-fluid" src={imageURL} alt="" />
              </div>
              <div className="col-md-5 offset-md-1" style={{textAlign: "left"}}>
                <h3 className="pt-5">{title}</h3>
                <small>Share <span style={{color: "#3b5998"}}><FaFacebookF/></span> <span style={{color: "#00acee"}}><FaTwitter/></span> <span style={{color: "#E60023"}}><FaPinterestP/></span></small>
                <h4 className="text-color fw-bold pt-2">{price}</h4>
                <small style={{fontSize:"12px"}}>Regular fit, round neckline, long sleeves. 100% cotton, brushed inner side for extra comfort.</small>
                <p>{category}</p>
                <p>{description}</p>
                <p><MdAssignmentTurnedIn/> <small className="text-secondary">Security policy (edit with Customer reassurance module)</small> </p>
                <p><GrDeliver/> <small className="text-secondary">Delivery policy (edit with Customer reassurance module)</small></p>
                <p><RiArrowLeftRightFill/> <small className="text-secondary">Return policy (edit with Customer reassurance module)</small></p>
                <button className="btn-card" style={{fontWeight: 'bold'}}><a href="https://bd-bliss.web.app/">Go to Home</a></button>
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
