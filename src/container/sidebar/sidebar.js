import "./sidebar.css";
import Category from "./category";
import Gender from "./gender";
import Brand from "./brand";

function Sidebar(props){
    /*async function getProducts() {
        const response = await axios.get("https://demo7242716.mockable.io/products");
        const allData = await response.data.products;
        const filtervalue = []
        allData.forEach(element => {
            if(!filtervalue.includes(element.brand)){
                filtervalue.push(element.brand)
            }
        }); 
        console.log(filtervalue)
    }

    useEffect(() => {
        getProducts();
    })*/


    
    return(
        <div className="sidebar">
            <div className="filterSection">
                <h3>Filters</h3>
            </div>
            <Gender/>
            <Category />
            <Brand />
        </div>
    )
}

export default Sidebar