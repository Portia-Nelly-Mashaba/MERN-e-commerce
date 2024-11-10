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

export const deleteProduct = (id) => (dispatch) => {
    dispatch({ type: 'DELETE_PRODUCT_REQUEST' });
    axios
        .delete(`http://localhost:5000/deleteproduct/${id}`)
        .then(() => {
            dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: id });
        })
        .catch((err) => {
            dispatch({ type: 'DELETE_PRODUCT_FAILED', payload: err });
        });
};



export const addReview = (review, productid) => (dispatch, getState) => {
    // Extract only the user details within `currentUser`
    const currentUser = getState().loginUserReducer?.currentUser?.user;

    if (!currentUser) {
        console.error('User is not logged in');
        dispatch({ type: 'ADD_PRODUCT_REVIEW_FAILED', error: 'User not logged in' });
        return;
    }

    dispatch({ type: 'ADD_PRODUCT_REVIEW_REQUEST' });

    // Log the refined payload structure to verify before sending
    console.log("Payload being sent:", JSON.stringify({ review, productid, currentUser }, null, 2));

    axios.post('http://localhost:5000/addproductreview', { review, productid, currentUser })
        .then(res => {
            dispatch({ type: 'ADD_PRODUCT_REVIEW_SUCCESS' });
            window.alert('Your Review Submitted Successfully')
            window.location.reload();
        })
        .catch(err => {
            console.error('Error submitting review:', err.response?.data || err.message || 'Request failed');
            dispatch({ type: 'ADD_PRODUCT_REVIEW_FAILED', error: err.response?.data || 'Request failed' });
        });
};



export const addProduct =(product) => dispatch=>{
    
    dispatch({type: 'ADD_PRODUCT'})

    axios.post('http://localhost:5000/addproduct', {product})
    .then(res =>{
        dispatch({type: 'ADD_PRODUCT_SUCCESS'})
        window.location.reload()
    }).catch(err=>{
        dispatch({type: 'ADD_PRODUCT_FAILED'})
    })
}

// export const addProduct = (product) => (dispatch, getState) => {
//     const currentUser = getState().loginUserReducer?.currentUser;

//     if (!currentUser) {
//         console.error('User is not logged in');
//         dispatch({ type: 'ADD_PRODUCT_FAILED', error: 'User not logged in' });
//         return;
//     }

   
//     console.log('user:', currentUser);
//     dispatch({ type: 'ADD_PRODUCT' });

//     // Send product data along with userid
//     axios.post('http://localhost:5000/addproduct', { product, currentUser })
//         .then((res) => {
//             dispatch({ type: 'ADD_PRODUCT_SUCCESS' });
//             window.location.reload();
//         })
//         .catch((err) => {
//             console.error('Error adding product:', err);
//             dispatch({ type: 'ADD_PRODUCT_FAILED', error: err.message });
//         });
// };



