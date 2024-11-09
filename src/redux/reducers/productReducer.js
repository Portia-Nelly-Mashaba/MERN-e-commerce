// export const getAllProductsReducer  =(state={products : []}, action)=> {

//     switch(action.type)
//     {
//         case 'GET_PRODUCTS_REQUEST': return {
//             loading : true
//         }
//         case 'GET_PRODUCTS_SUCCESS': return {
//             products: action.payload,
//             loading: false
//         }
//         case 'GET_PRODUCTS_FAILED': return {
//             error: action.payload,
//             loading: false
//         }
//         default:
//             return state;

//     }
// }

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


// reducers/productReducer.js
export const getAllProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_REQUEST':
            return { loading: true };
        case 'GET_PRODUCTS_SUCCESS':
            return { products: action.payload, loading: false };
        case 'GET_PRODUCTS_FAILED':
            return { error: action.payload, loading: false };
        
        case 'DELETE_PRODUCT_REQUEST':
            return { ...state, loading: true };
        case 'DELETE_PRODUCT_SUCCESS':
            return { 
                products: state.products.filter(product => product._id !== action.payload), 
                loading: false 
            };
        case 'DELETE_PRODUCT_FAILED':
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
    }
};

export const addProductReducer  =(state={}, action)=> {

    switch(action.type)
    {
        case 'ADD_PRODUCT_REQUEST': return {
            loading : true
        }
        case 'ADD_PRODUCT_SUCCESS': return {
            products: action.payload,
            loading: false
        }
        case 'ADD_PRODUCT_FAILED': return {
            error: action.payload,
            loading: false
        }
        default:
            return state;

    }
}

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'UPDATE_PRODUCT_STOCK':
            return {
                ...state,
                products: state.products.map((product) =>
                    product._id === action.payload._id
                        ? { ...product, countInStock: action.payload.countInStock }
                        : product
                ),
            };
        default:
            return state;
    }
};


  

  


