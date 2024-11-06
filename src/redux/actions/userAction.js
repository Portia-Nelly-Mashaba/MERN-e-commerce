import axios from 'axios'

export const registerNewUser=()=>dispatch=>{
    dispatch({type: 'USER_REGISTER_REQUEST'})

    axios
    .post('/regiter')
    .then(res => {
        dispatch({type: 'USER_REGISTER_SUCCESS'})
    })
    .catch(err => {
        dispatch({type: 'USER_REGISTER_FAILED'})
    })


}