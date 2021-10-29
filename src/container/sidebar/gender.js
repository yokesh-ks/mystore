import "./sidebar.css";
import { useDispatch } from "react-redux";
import {selectedGender} from "../../redux/actions/productActions";
import React from "react";
function Gender(){
    const dispatch = useDispatch();

    const gender = [
        "Women",
        "Men",
        "Unisex",
        "Girls"
    ]
    
    function handleRadio(e){
        dispatch(selectedGender(e.target.value))
    }


    return(
        <div className="sidebar-section">
            <h2>Gender</h2>
            {gender.map(gender=>{
                return(
                    <div className="checkoption">
                        <input 
                            type="radio" 
                            name="gender" 
                            value={gender}
                            onChange={handleRadio}
                        />
                        <label for={gender}>{gender}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default Gender