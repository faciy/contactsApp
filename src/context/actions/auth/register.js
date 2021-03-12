import axiosInstance from "../../../helpers/axiosInterceptor";
import {REGISTER_LOADING, REGISTER_SUCCES, REGISTER_FAIL} from '../../../constants/actionTypes'

export default({
    email,
    password,
    username,
    firstName: first_name,
    lastName : last_name
}) => dispatch =>{
    dispatch({
        type: REGISTER_LOADING
    })
    axiosInstance.post("auth/register", {
    email,
    password,
    username,
    first_name,
    last_name
    }).then(res => {
        console.log('res',res)
        dispatch({
            type: REGISTER_SUCCES,
            payload: res.data
        })
    }).catch(err => {
        console.log('err',err)
        dispatch({
            type: REGISTER_FAIL,
            payload: err.data ? err.data : {error : 'Something went wrong, try again'}
        })
    })
}