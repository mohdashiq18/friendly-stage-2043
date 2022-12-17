import axios from 'axios'
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../AuthReducer/Action'
import "./Login.css"
export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const data=useSelector(state=>state.LogReducer)
    console.log("Data.....",data)
    const pay={
        email,
        password
    }
   
 const onLogin=()=>{
    
    if(email=="" || password==""){
        alert("miss match password")
    }else{
        dispatch(login(pay))
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err.response?.data || err.massage))
    }
 }
  return (
    <div>
    <div className='input_div_main'>
        <div className='input_div'>
            <div className='input_heading'>REGISTERED CUSTOMERS</div>
            
            <div className='tit'>If you have an account, sign in with your email address.</div>
           
            <div className='input_details'>
                    <label>Email<span> *</span></label><br/>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            
            <div className='input_details'>
                    <label>Password<span> *</span></label><br/>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            
            
            <div className='input_button'>
                <button onClick={onLogin}>SIGN IN</button>
                <a href='#'>Forgot Your Password?</a>
            </div>
        </div>
        <div className='register'>
    <div className='input_heading'>NEW CUSTOMERS</div>
            
            <div className='tit'>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</div>
            <div className='input_button'>
                    <button >CREATE AN ACCOUNT</button>
                </div>
    </div>
    </div>
 
</div>
  )
}
