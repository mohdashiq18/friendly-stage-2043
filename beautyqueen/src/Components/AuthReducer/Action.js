import * as types from "./ActionType"
import axios from "axios"
const signup = (payload) => (dispatch)=>{
    dispatch({type:types.SIGNUP_REQUEST});

    return axios.post(`http://localhost:8080/users/signup`,payload)
    .then((res)=>dispatch({type:types.SIGNUP_SUCCESS,payload:payload}))
    .catch((e)=>dispatch({type:types.SIGNUP_FAILURE,payload:e}))

}

const login = (payload) => (dispatch)=>{
    dispatch({type:types.LOGIN_REQUEST});

    return axios.post(`http://localhost:8080/users/login`,payload)
    .then((res)=>dispatch({type:types.LOGIN_SUCCESS,payload:res.data}))
    .catch((e)=>dispatch({type:types.LOGIN_FAILURE,payload:e}))

}
export { signup}
export {login}