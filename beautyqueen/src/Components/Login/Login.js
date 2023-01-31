import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataUrl } from "../../share";
import "./Login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const pay = {
    email,
    password,
  };

  const onLogin = () => {
    if (email === "" || password === "") {
      toast.error("Wrong Credential!");
    } else {
      axios
        .post(`${dataUrl}/users/login`, pay)
        .then((res) => {
          console.log(res.data);
          if (res.data.msg === "Login Successfull") {
            localStorage.setItem("UserToken", JSON.stringify(res.data));
            toast.success("Login successfully");
            navigate("/");
          } else {
            toast.error("Wrong Credential!");
          }
        })
        .catch((err) => toast.error("Wrong Credential!"));
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
            <input type="email" style={{paddingLeft:"10px"}} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input_details">
            <label>
              Password<span> *</span>
            </label>
            <br />
            <input
              type="password"
              style={{paddingLeft:"10px"}}
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
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
