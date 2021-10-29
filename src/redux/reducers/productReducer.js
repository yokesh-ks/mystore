import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: []
}

const filterState ={
    gender: [],
    category: [],
    brand: [],
    price: []
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        case ActionTypes.REMOVE_SET_PRODUCTS:
            return {...state, products:[] }
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return { };
        default:
            return state;
    }
}

export const selectedFilter = (state = filterState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_GENDER:
            return {...state, gender:payload};
        case ActionTypes.SET_CATEGORY:
            return {...state, category:payload};
        case ActionTypes.SET_BRAND:
            return {...state, brand:payload};
        case ActionTypes.REMOVE_FILTERS:
            return {...state, gender:[]};
            
        default:
            return state;
    }
}