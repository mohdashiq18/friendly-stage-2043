import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import "./Responsive.css"
import { BsSuitHeartFill, BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo1 from "../NavBar/beautybebo_logo.png"
export default function Navdar() {
  const [loginDropDown, seloginDropDown] = useState(false);
  const [loginDropDown2, seloginDropDown2] = useState(false);
  const doIt = ()=> {
    seloginDropDown(false)
    seloginDropDown2(false)
  }
  return (
    <div className='mid_nav_main'>
       <div className='mid_nav_mid'>
        <div className='mid_nav_first'>
           <div style={{width:"30%",paddingLeft:"5%",marginTop:"-15px"}} >
          <Link to={"/"}><img style={{width:"100%"}} src={logo1}/>  </Link> 
            </div>
          <div className='logo_div' >
           <div className="user" onClick={()=>seloginDropDown2(!loginDropDown2)}><BsPersonFill/></div>
           {
                        loginDropDown2 ?
                            <>
                                <div id="content_dropdown2" onMouseOut={doIt}  >
                                    <Link to="/login"><div id="login_dropdown">Login</div></Link>
                                    <Link to="/signup"><div id="register_dropdown">Register</div></Link>
                                    <Link to="/admin"> <div id="register_dropdown">Admin</div></Link>
                                   
                                </div>
                            </>:null
                    }
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
          <div className="user_div"  onClick={()=>seloginDropDown(!loginDropDown)} ><BsPersonFill/></div>
          {
                        loginDropDown ?
                            <>
                                <div id="content_dropdown"  >
                                    <Link to="/login"><div id="login_dropdown">Login</div></Link>
                                    <Link to="/signup"><div id="register_dropdown">Register</div></Link>
                                    <Link to="/admin"> <div id="register_dropdown">Admin</div></Link>
                                   
                                </div>
                            </>:null
                    }
            <div className='text' style={{marginTop:"9px",marginLeft:"9px"}}>My Account</div>
          </div>
        </div>
       </div>
    </div>
  )
}
{/* <div id="content" onClick={() => { seloginDropDown(!loginDropDown)}}>My Account</div>
                    {
                        loginDropDown ?
                            <>
                                <div id="content_dropdown"  >
                                    <Link to="/login"><div id="login_dropdown">Login</div></Link>
                                    <Link to="/signup"><div id="register_dropdown">Register</div></Link>
                                    <Link to="/admin"> <div id="register_dropdown">Admin</div></Link>
                                   
                                </div>
                            </>:null
                    }
                </div> */}