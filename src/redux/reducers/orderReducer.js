export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PLACE_ORDER_REQUEST':
            return {
                ...state,
                loading: true
            };

        case 'PLACE_ORDER_SUCCESS':
            return {
                ...state,
                loading: false,
                orders: action.payload
            };

        case 'PLACE_ORDER_FAILED':
            return {
                ...state,
                loading: false,
                error: true
            };

        default:
            return state;
    }
};


export const getOrdersByUserIdReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ORDERSBYUSERID_REQUEST':
            return {
                ...state,
                loading: true
            };

        case 'GET_ORDERBYUSERID_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true
            };

        case 'GET_ORDERSBYUSERID_FAILED':
            return {
                ...state,
                loading: false,
                error: true
            };

        default:
            return state;
    }
};

export const getAllOrdersReducer = (state = {odrders: []}, action) => {
    switch (action.type) {
        case 'GET_ORDERS_REQUEST':
            return {
                ...state,
                loading: true
            };

        case 'GET_ALLORDERS_SUCCESS':
            return {
                ...state,
                loading: false,
                orders: action.payload
            };

        case 'GET_ALLORDERS_FAILED':
            return {
                ...state,
                loading: false,
                error: true
            };

        default:
            return state;
    }
};

