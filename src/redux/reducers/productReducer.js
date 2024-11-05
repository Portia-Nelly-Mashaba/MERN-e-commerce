export const getAllProductsReducer  =(state={products : []}, action)=> {

    switch(action.type)
    {
        case 'GET_PRODUCTS_REQUEST': return {
            loading : true
        }
        case 'GET_PRODUCTS_SUCCESS': return {
            products: action.payload,
            loading: false
        }
        case 'GET_PRODUCTS_FAILED': return {
            error: action.payload,
            loading: false
        }
        default:
            return state;

    }
}

export const getAllProductByIdReducer = (state = { product: null, loading: false, error: null }, action) => {
    switch (action.type) {
        case 'GET_PRODUCTBYID_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'GET_PRODUCTBYID_SUCCESS':
            return {
                ...state,
                product: action.payload,
                loading: false
            };
        case 'GET_PRODUCTBYID_FAILED':
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};



