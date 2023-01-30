import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { dataUrl } from "../../share";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export default function SingUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmpass, setConfirmPass] = useState("");

  // console.log(data)

  // if(data.userData===""){
  //     console.log("error")
  // }else{
  //     localStorage.setItem('UserDetails', JSON.stringify(data))
  // }

  //    const {isAuth}=localStorage.getItem("UserDetails")
  //    isAuth?console.log("true"):console.log("error")
  const payload = {
    name: `${firstname} ${lastname}`,
    phone: Number(phone),
    email,
    password,
  };
  console.log(payload);
  console.log(email);
  const navigate = useNavigate();
  const onsubmit = (e) => {
    e.preventDefault();
    if (
      firstname == "" ||
      lastname == "" ||
      phone == "" ||
      email == "" ||
      password == "" ||
      confirmpass == "" ||
      password !== confirmpass
    ) {
      toast.error("Password not mathched!");
    } else {
      axios
        .post(`${dataUrl}/users/register`, payload)
        .then((res) => {
          toast.success("SignUp succesfully");
          navigate("/login");
        })
        .catch((err) => toast.error(err.response.data.message));
    }
  };
  return (
    <div>
      <div className="input_div_main">
        <div className="input_div">
          <div className="input_heading">PERSONAL INFORMATION</div>
          <form>
            <div className="name_div">
              <div className="name">
                <label>
                  First Name<span> *</span>
                </label>
                <br />
                <input
                  type="text"
                  style={{ paddingLeft: "10px" }}
                  name="name"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="name">
                <label>
                  Last Name<span> *</span>
                </label>
                <br />
                <input
                  type="text"
                  style={{ paddingLeft: "10px" }}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <div>
                <label>Sign Up for Newsletter</label>
              </div>
            </div>
            <div className="input_details">
              <label>
                Email<span> *</span>
              </label>
              <br />
              <input
                type="email"
                style={{ paddingLeft: "10px" }}
                name="name"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input_details">
              <label>
                Phone<span> *</span>
              </label>
              <br />
              <input
                type="number"
                style={{ paddingLeft: "10px" }}
                name="number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="input_details">
              <label>
                Password<span> *</span>
              </label>
              <br />
              <input
                type="password"
                style={{ paddingLeft: "10px" }}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>Password Strength: No Password</div>
            <div className="input_details">
              <label>
                Confirm Password<span> *</span>
              </label>
              <br />
              <input
                type="password"
                style={{ paddingLeft: "10px" }}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
              />
            </div>
            <div className="input_button">
              <button onClick={onsubmit}>CREATE AN ACCOUNT </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
