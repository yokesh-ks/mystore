import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, selectedFilter } from "./productReducer";

const reducers = combineReducers({
    allproducts: productReducer,
    product: selectedProductReducer,
    filter: selectedFilter
})

export default reducers;