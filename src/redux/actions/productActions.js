import axios from 'axios';

export const getAllProducts = () => (dispatch) => {
    dispatch({ type: 'GET_PRODUCTS_REQUEST' });

    axios
        .get('http://localhost:5000/getproducts')
        .then((result) => {
            console.log(result);
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: result.data });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: 'GET_PRODUCTS_FAILED', payload: err });
        });
};

export const getProductById = (productid) => (dispatch) => {
    dispatch({ type: 'GET_PRODUCTBYID_REQUEST' })
    
        axios
            .get(`http://localhost:5000/getproductbyid/${productid}`)
            .then((result) => {
                dispatch({ type: 'GET_PRODUCTBYID_SUCCESS', payload: result.data });
            })
            .catch((err) => {
                console.error(err);
                dispatch({ type: 'GET_PRODUCTBYID_FAILED', payload: err });
            });
    
};



export const filterProducts = (searchKey, sort, category) => (dispatch) => {
    dispatch({ type: 'GET_PRODUCTS_REQUEST' });

    axios
        .get('http://localhost:5000/getproducts')
        .then((result) => {
            let filteredProducts = result.data;

            // Apply search filter
            if (searchKey) {
                filteredProducts = filteredProducts.filter((product) =>
                    product.name.toLowerCase().includes(searchKey.toLowerCase())
                );
            }

            // Apply sorting
            if (sort !== 'popular') {
                filteredProducts = filteredProducts.sort((a, b) => {
                    return sort === 'htl' ? b.price - a.price : a.price - b.price;
                });
            }

            // Apply category filter
            if (category !== 'all') {
                filteredProducts = filteredProducts.filter((product) =>
                    product.category.toLowerCase() === category.toLowerCase()
                );
            }

            // Dispatch the filtered and sorted products
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: filteredProducts });
        })
        .catch((err) => {
            console.error(err);
            dispatch({ type: 'GET_PRODUCTS_FAILED', payload: err });
        });
};
