import React from 'react';
import { useSelector } from "react-redux";
import "../product-details.css";

function Productcontent() {
    const product = useSelector((state) => state.product);
    return (
        <div class="singleproduct">
            <h3>{product.productName}</h3>
            <div className="brand">
                <label>Brand :</label>
                <p>{product.brand}</p>
            </div>
            <div className="rating">
                <div>{product.rating}</div>
                <label>Star</label>
                <div>{product.ratingCount}</div>
                <label>Rating</label>
            </div>
            <div className="Price">
                <p className="final">Rs. {product.price}</p>
                <p className="mrp">Rs. {product.mrp}</p>
                <p className="discount">{product.discountDisplayLabel}</p>
            </div>
            <div class="color">
                <label>primaryColor : </label>
                <p>Black</p>
            </div>
            <div class="category">
                <label>Category : </label>
                <p>Kurta Sets</p>
            </div>
            <div class="meta">
                <p>100% Original Products</p>
                <p>Pay on delivery might be available</p>
                <p>Easy 30 days returns and exchanges</p>
                <p>Try & Buy might be available</p>
            </div>
        </div>
    )
}

export default Productcontent
