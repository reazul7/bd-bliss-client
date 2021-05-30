import React from 'react';
import {Link} from 'react-router-dom'
// import { useSelector } from 'react-redux';

const ProductComponent = ({product}) => {
//      const products = useSelector((state) => state.allProducts.products);
//   // console.log(products)
//   const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
        <div className="container" key={id}>
          <Link to={`/product/${id}`}  style={{textDecoration:'none', color:"black"}}>

             <div className="col">
                <div className="card h-100" style={{ width: '18rem', padding:"22px" }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Price:  {price}$</p>
              <p className="card-text">Cetegory:  {category}</p>
              <h6  className="card-text">Product id:  {id}</h6>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
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