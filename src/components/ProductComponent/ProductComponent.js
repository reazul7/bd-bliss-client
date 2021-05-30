import React from 'react';
import {Link} from 'react-router-dom'
// import { useSelector } from 'react-redux';

const ProductComponent = ({product}) => {
//      const products = useSelector((state) => state.allProducts.products);
//   // console.log(products)
//   const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
        <div class="container" >
          <Link to={`/product/${id}`}  style={{textDecoration:'none', color:"black"}}>

             <div class="col">
                <div class="card " style={{height:"33rem", width: '18rem', padding:"20px" }}>
            <img src={image} class="card-img-top" style={{ height: "150px" }} alt={title} />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">Price:  {price}$</p>
              <p class="card-text">Cetegory:  {category}</p>
              <h6  class="card-text">Product id:  {id}</h6>
               <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
          </div>
          </div>

           </Link>

        </div >

      );
    // });
    //   return (
    //     <div>
    //     <div>
    //    { renderList}
    //    </div>
    //     </div>
    // );
};

export default ProductComponent;