import "./sidebar.css";
import "./category.css";
import React from "react";
import { useDispatch } from "react-redux";
import {selectedCategory} from "../../redux/actions/productActions";

function Category(){
    const dispatch = useDispatch();
    const cat= [
        "Watches",
        "Jeans",
        "Flip Flops",
        "Kurtas",
        "Casual Shoes",
        "Sweatshirts",
        "Kurta Sets",
        "Dresses",
        "Jackets",
        "Shirts",
        "Fitness Bands",
        "Tshirts",
        "Jumpsuit",
        "Track Pants",
        "Clothing Set",
        "Tops",
        "Headphones",
        "Sarees",
        "Mascara",
        "Sports Shoes",
        "Kajal and Eyeliner",
        "Suits",
        "Sweaters",
        "Smart Watches",
        "Formal Shoes",
        "Trousers"
    ]

    var optioncat = [];

    function handleOnChange (e){
        
        const value = e.target.value
        if(!optioncat.includes(value)){
            console.log("add")
            optioncat.push(value);
        }
        else{
            console.log("delete")
            for (let i=0; i<optioncat.length; i++){
                if(optioncat[i] === value){
                    optioncat.splice(i, 1);
                }
            }
        }
        dispatch(selectedCategory(optioncat))
    } 

    return(
        <div className="sidebar-section Category">
            <h2>Category</h2>
            <div className="Category">
            {cat.map(category =>{
                return(
                    <div className="checkoption">
                        <input 
                            type="checkbox" 
                            name={category} 
                            value={category}
                            onChange = {handleOnChange}
                        />
                        <label for={category}>{category}</label>
                    </div> 
                )
            })}  
            </div>
        </div>
    )
}

export default Category