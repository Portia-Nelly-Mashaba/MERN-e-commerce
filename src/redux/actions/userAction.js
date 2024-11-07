import axios from 'axios'


export const registerNewUser=(userData)=>dispatch=>{
    dispatch({type: 'USER_REGISTER_REQUEST'})

    axios
        .post('http://localhost:5000/register', userData)  
        .then((res) => {
            dispatch({ type: 'USER_REGISTER_SUCCESS', payload: res.data });
            console.log('Registration Success:');
        })
        .catch((err) => {
            dispatch({ type: 'USER_REGISTER_FAILED', payload: err });
            console.error('Registration Error:');
        });
};

export const loginUser=(userData)=>dispatch=>{
    dispatch({type: 'USER_LOGIN_REQUEST'})

    axios
        .post('http://localhost:5000/login', userData)  
        .then((res) => {
            dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res.data });
            localStorage.setItem('currentUser', JSON.stringify(res.data))

            window.location.href='/'
            console.log('Login Success:');
        })
        .catch((err) => {
            dispatch({ type: 'USER_LOGIN_FAILED', payload: err });
            console.log('login Error:');
        });
};

export const logoutUser=(userData)=>dispatch=>{
    dispatch({ type: 'LOGOUT_USER' });
    localStorage.removeItem('currentUser')
    localStorage.removeItem('cartItems')

    localStorage.removeItem('userData'); 
    
    
    window.location.href='/'
}