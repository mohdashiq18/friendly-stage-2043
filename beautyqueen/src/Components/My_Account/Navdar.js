import React from 'react'
import { FiSearch } from "react-icons/fi";
import "./Responsive.css"
import { BsSuitHeartFill, BsPersonFill } from "react-icons/bs";
export default function Navdar() {
  return (
    <div className='mid_nav_main'>
       <div className='mid_nav_mid'>
        <div className='mid_nav_first'>
          <div className='logo_div' >
           <img style={{width:"100%"}} src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"/>
           <div className="user"><BsPersonFill/></div>
          </div>
          <div className='search_div'>
           <select className='select' >
            <option  >All Categories</option>
           <option value="option1">--Make up</option>
              <option value="option2"> ----Face</option>
              <option value="option3">------Foundation</option>
              <option value="option3">------Blush</option>
              <option value="option3">------Highlighter</option>
              <option value="option3">------Concealer</option>
              <option value="option3">------Compact & Powder</option>
              <option value="option3">------Face Primer</option>
              <option value="option3">------Makeup Remover</option>
              <option value="option3">------Bronzer</option>
              <option value="option3">------BB Cream</option>
              <option value="option3">------Loose Powder</option>
              <option value="option3">------Makeup Remover</option>
              <option value="option3">------Setiig Spray</option>
              <option value="option3">------Makeup Kit</option>
              <option value="option3">------CC Cream</option>
            </select>  
            <input className='input' type="search" />
            <div className='search_icon'><FiSearch/></div>
          </div>          
        </div>
        <div className='mid_nav_sec'>
          <div className='like_div'>
            <BsSuitHeartFill/>
          </div>
          <div style={{display:"flex"}} >
          <div className="user_div"><BsPersonFill/></div>
            <div className='text' style={{marginTop:"9px",marginLeft:"9px"}}>My Account</div>
          </div>
        </div>
       </div>
    </div>
  )
}
