import React from 'react'
import "./SignUp.css"
export default function SingUp() {
  return (
    <div>
        <div className='input_div_main'>
            <div className='input_div'>
                <div className='input_heading'>PERSONAL INFORMATION</div>
                <div className='name_div'>
                    <div className='name'>
                        <label>First Name<span> *</span></label><br/>
                        <input type="text"/>
                    </div>
                    <div className='name'>
                        <label>Last Name<span> *</span></label><br/>
                        <input type="text"/>
                    </div>
                </div>
                <div className='checkbox'>
                    <input type="checkbox"/>
                    <div><label>Sign Up for Newsletter</label></div>
                </div>
                <div className='input_details'>
                        <label>Email<span> *</span></label><br/>
                        <input type="email"/>
                </div>
                <div className='input_details'>
                        <label>Phone<span> *</span></label><br/>
                        <input type="number"/>
                </div>
                <div className='input_details'>
                        <label>Password<span> *</span></label><br/>
                        <input type="text"/>
                </div>
                <div>Password Strength: No Password</div>
                <div className='input_details'>
                        <label>Confirm Password<span> *</span></label><br/>
                        <input type="text"/>
                </div>
                <div className='input_button'>
                    <button>CREATE AN ACCOUNT</button>
                </div>
            </div>
        </div>
    </div>
  )
}
