import axios from 'axios'

export const registerNewUser=()=>dispatch=>{
    dispatch({type: 'USER_REGISTER_REQUEST'})

    axios
    .post('http://localhost:5000/register')
    .then(res => {
        dispatch({type: 'USER_REGISTER_SUCCESS'})
        console.log(res);
        
    })
    .catch(err => {
        dispatch({type: 'USER_REGISTER_FAILED'})
        console.log(err);
    })


}