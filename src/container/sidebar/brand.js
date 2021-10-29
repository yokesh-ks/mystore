import "./sidebar.css";
import "./brand.css"
import { useDispatch } from "react-redux";
import {selectedBrand} from "../../redux/actions/productActions";

function Brand(){
    const dispatch = useDispatch();
    const brand = [
        "Daniel Klein",
        "Roadster",
        "Puma",
        "Vishudh",
        "Mactree",
        "Campus Sutra",
        "Ahalyaa",
        "HERE&NOW",
        "Rigo",
        "HIGHLANDER",
        "Mayra",
        "Mi",
        "United Colors of Benetton",
        "LOCOMOTIVE",
        "Levis",
        "High Star",
        "Vaamsi",
        "Bitiya by Bhama",
        "Calvin Klein Jeans",
        "DOROTHY PERKINS",
        "SASSAFRAS",
        "Kook N Keech",
        "HRX by Hrithik Roshan",
        "WM",
        "Hangup",
        "Flying Machine",
        "Soch",
        "Being Human",
        "boAt",
        "WINGS",
        "NOISE",
        "ELIXIR MAN",
        "DEYANN",
        "Hubberholme",
        "Sera",
        "Fossil",
        "Anouk",
        "Kvsfab",
        "WROGN",
        "Idalia",
        "MANGO",
        "Harpa",
        "Tikhi Imli",
        "Maniac",
        "Rajesh Silk Mills",
        "Maybelline",
        "ADIDAS",
        "Lakme",
        "all about you",
        "Miss Chase",
        "MONTVITTON",
        "Azira",
        "Monte Carlo",
        "Saree mall",
        "Amazfit",
        "Fastrack",
        "Sir Corbett",
        "Zastraa",
        "Varanga",
        "Allen Solly Sport",
        "Hancock",
        "Tinted",
        "Red Tape",
        "2GO",
        "Libas"
    ]

    var optionbrand = [];

    function handleOnChange (e){
        
        const value = e.target.value
        if(!optionbrand.includes(value)){
            console.log("add")
            optionbrand.push(value);
        }
        else{
            console.log("delete")
            for (let i=0; i<optionbrand.length; i++){
                if(optionbrand[i] === value){
                    optionbrand.splice(i, 1);
                }
            }
        }
        dispatch(selectedBrand(optionbrand))
    } 

    return(
        <div className="sidebar-section ">
            <h2>Brand</h2>
            <div className="brandoption">
                {brand.map(brand=>{
                    return(
                        <div className="checkoption">
                            <input type="checkbox" name={brand} value={brand} onChange = {handleOnChange}/>
                            <label for={brand}>{brand}</label>
                        </div>
                    )
                })
                }
            </div>
            
        </div>
    )
}

export default Brand