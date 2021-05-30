import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "../ProductComponent/ProductComponent";
import { setProducts } from "../redux/actions/productsActions";

const ProductList = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    console.log(products);

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("err", err);
            });
        console.log(response.data);
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log("products", products);
    return (
        <div class="mt-5 container">

            <h1>FEATURED PRODUCTS</h1>
      <p className="pt-2">
        For our ten-year anniversary, we're envisioning our best-selling styles.
      </p>

            <div className=" container row row-cols-1 row-cols-md-3 g-4 ">
            {products.map((product) => (
                <ProductComponent product={product}></ProductComponent>
            ))}
        </div>
        </div>
    );
};

export default ProductList;