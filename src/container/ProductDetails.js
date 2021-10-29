import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct, removeSelectedProduct} from "../redux/actions/productActions";
import CaroselImage from "./singleproduct/caroselimage";
import ProductContent from "./singleproduct/productcontent";
import "./product-details.css";
import image from "../images/back.svg";
import { Link } from "react-router-dom";

function ProductDetails() {
    const {productId} = useParams();
    const dispatch = useDispatch();

    const products = useSelector((state) => state.allproducts.products);
   
    function ProductList(){
        products.map(product =>{
            //console.log(product.productId);
            console.log(productId);
            if(product.productId == productId){ 
                console.log(product); 
                dispatch(selectedProduct(product));       
            } 
        } )
    }
ProductList();
    useEffect(() => {
        
        return () => {
            dispatch(removeSelectedProduct())
        }
    })
    

    return(
        <div >
            <div className="breadcrums">
                <Link to={'/'}>
                <img src={image} alt=""/>
                </Link>
            </div>
            <div className="product-container">
                <CaroselImage />
                <ProductContent />
            </div>
            
        </div>
        
    )
}

export default ProductDetails
