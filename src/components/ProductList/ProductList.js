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
            .get("https://obscure-taiga-16258.herokuapp.com/product")
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
        <div class="mt-5 container pt-5 mt-5">

            <h1 className="text-center">FEATURED PRODUCTS</h1>
      <p class="pt-2 text-center">
        For our ten-year anniversary, we're envisioning our best-selling styles..
      </p>

            <div class=" row row-cols-1  row-cols-md-3 g-0  ">
            {products.map((product) => (
                <ProductComponent product={product}  key={product._id}></ProductComponent>
            ))}
        </div>
        </div>
    );
};

export default ProductList;