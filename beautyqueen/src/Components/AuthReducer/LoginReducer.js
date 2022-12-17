import React from 'react'
import * as types from "./ActionType"

const LoginReducer=(state={},action)=>{
     const {type,payload}=action
     switch(type){
        case types.LOGIN_SUCCESS:
            return{
                ...state,
                payload
            }
         default:
            return   state
     }
}
export {LoginReducer}