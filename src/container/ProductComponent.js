import React from 'react';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import "./product.css";

function ProductComponent() {
    const products = useSelector((state) => state.allproducts.products);
    const renderList = products.map((product) => {
        return (
            <div className="card" key={product.productId} >
                <Link className="link" to={`/product/${product.productId}`}>
                <div>
                    <img src={product.searchImage} alt=""/>
                    <h4 class="brand">{product.brand}</h4>
                    <h5 class="description">{product.productName}</h5>
                    <div className="Price">
                        <p className="final">Rs. {product.price}</p>
                        <p className="mrp">Rs. {product.mrp}</p>
                        <p className="discount">{product.discountDisplayLabel}</p>
                    </div>
                </div>
                </Link>
            </div>
        )
    })

    return(
        renderList
    )
    
}

export default ProductComponent
