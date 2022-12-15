import React from 'react'
import * as types from "./ActionType"
const initialState = {
  isAuth: false,
  userData: {},
  isLoading: false,
  isError: false,
};

const Reducer = (state = initialState,action) => {
    const {type, payload} =action;
    switch(type){
    case types.SIGNUP_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false,
      }

      case types.SIGNUP_SUCCESS:
        return{
          ...state,
          isAuth:true,
          userData:payload,
          isLoading:false,
          isError:false,
        }
        case types.SIGNUP_FAILURE:
          return{
            ...state,
            isAuth:false,
            userData:"",
            isLoading:false,
            isError:true
          }
      default:
      return state;

    }
    };

    export { Reducer };