import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../AuthReducer/Action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const data = useSelector((state) => state.LogReducer);
  console.log("Data.....", data);
  const pay = {
    email,
    password,
  };

  const onLogin = () => {
    if (email == "" || password == "") {
      toast.error("email or password not matched!")
    } else {
      dispatch(login(pay))
        .then((res) => {
          toast.success("Login succesfully")
          navigate("/")
          
    })
        .catch((err) => (
          toast.error("something went wrong!")
        ));
    }
  };
  return (
    <div>
      <div className="input_div_main">
        <div className="input_div">
          <div className="input_heading">REGISTERED CUSTOMERS</div>

          <div className="tit">
            If you have an account, sign in with your email address.
          </div>

          <div className="input_details">
            <label>
              Email<span> *</span>
            </label>
            <br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input_details">
            <label>
              Password<span> *</span>
            </label>
            <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input_button">
            <button onClick={onLogin}>SIGN IN</button>
            <a href="#">Forgot Your Password?</a>
          </div>
        </div>
        <div className="register">
          <div className="input_heading">NEW CUSTOMERS</div>

          <div className="tit">
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </div>
          <div className="input_button">
            <Link to="/signup">
              {" "}
              <button>CREATE AN ACCOUNT</button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center"
            autoClose={3000}/>
    </div>
  );
}
