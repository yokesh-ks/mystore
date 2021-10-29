import { useDispatch, useSelector } from "react-redux";
import {setProducts, removesetProducts} from "../redux/actions/productActions";
import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from './ProductComponent';
import "./product.css";


function ProductListing() {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    async function getProducts() {
        const response = await axios.get("https://demo7242716.mockable.io/products");
        const allData = await response.data.products;
        const filtervalue = []
        
        allData.forEach(element => {
            if(filter.gender.length === 0 && filter.category.length ===0 && filter.brand.length === 0){
                dispatch(removesetProducts());
                filtervalue.push(element);
            }
            if(!filtervalue.includes(element.gender) && element.gender == filter.gender){
                if(filter.category.length ===0 && filter.brand.length === 0){
                    dispatch(removesetProducts());
                    filtervalue.push(element);
                }
                else{
                    if(filter.brand.length === 0){
                        filter.category.forEach(category =>{
                            if(element.category === category){
                                dispatch(removesetProducts());
                                filtervalue.push(element);
                            }
                        })
                    }
                    if(filter.category.length ===0){
                        filter.brand.forEach(brand =>{
                            if(element.brand === brand){
                                dispatch(removesetProducts());
                                filtervalue.push(element);
                            }
                        })
                    }
                    else{
                        filter.brand.forEach(brand =>{
                            if(element.brand === brand){
                                filter.category.forEach(category =>{
                                    if(element.category === category){
                                        dispatch(removesetProducts());
                                        filtervalue.push(element);
                                    }
                                })
                            }
                        })
                    }
                    
                }
                console.log("value is filtered")
            }
            
        }); 
        dispatch(setProducts(filtervalue));
        console.log(filtervalue)
    }
    
    useEffect(() => {
        getProducts();
    })


    return (
        <div className="allproducts">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
