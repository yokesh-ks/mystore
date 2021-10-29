import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const removesetProducts = (products) => {
    return {
        type: ActionTypes.REMOVE_SET_PRODUCTS,
    }
}

export const selectedProduct = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}

export const removeSelectedProduct = (products) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const selectedGender = (gender) => {
    return {
        type: ActionTypes.SET_GENDER,
        payload: gender,
    }
}

export const selectedCategory = (category) => {
    return {
        type: ActionTypes.SET_CATEGORY,
        payload: category,
    }
}

export const selectedBrand = (brand) => {
    return {
        type: ActionTypes.SET_BRAND,
        payload: brand,
    }
}

export const removeFilters = (brand) => {
    return {
        type: ActionTypes.REMOVE_FILTERS,
    }
}