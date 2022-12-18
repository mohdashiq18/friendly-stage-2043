import * as types from "./ActionType"
import axios from "axios"
import { dataUrl } from "../../share";
const signup = (payload) => (dispatch)=>{
    dispatch({type:types.SIGNUP_REQUEST});

    return axios.post(`${dataUrl}/users/signup`,payload,{ withCredentials: true })
    .then((res)=>dispatch({type:types.SIGNUP_SUCCESS,payload:payload}))
    .catch((e)=>dispatch({type:types.SIGNUP_FAILURE,payload:e}))

}

const login = (payload) => (dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST});

    return axios.post(`${dataUrl}/users/login`,payload,{ withCredentials: true })
    .then((res)=>dispatch({type:types.LOGIN_SUCCESS,payload:res.data}))
    .catch((e)=>dispatch({type:types.LOGIN_FAILURE,payload:e}))

}
export { signup}
export {login}