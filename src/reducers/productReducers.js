import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from '../types';

//when I get new data from actions I update those data inside the redux
export const productsReducer = (state = {}, action) => {
    switch(action.type){
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                size:action.payload.size,
                filteredItems: action.payload.items,
            };
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items,
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload,
                filteredItems: action.payload,
                // items: action.payload, filteredItems: action.payload
            };
        default:
            return state;
    }
};