import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Responsive.css";
import { BsSuitHeartFill, BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo1 from "../NavBar/beautybebo_logo.png";
export default function Navdar() {
  const [loginDropDown, seloginDropDown] = useState(false);
  const [loginDropDown2, seloginDropDown2] = useState(false);
  const name = JSON.parse(localStorage.getItem("UserToken")) || false;
  const [userNmae, setUserName] = useState("");
  useEffect(() => {
    setUserName(name.name);
  });
  console.log(name);
  const doIt = () => {
    seloginDropDown(false);
    seloginDropDown2(false);
  };
  const data = [
    "All Categories",
    "--Make up",
    "----Face",
    "------Foundation",
    "------Blush",
    "------Highlighter",
    "------Concealer",
    "------Compact & Powder",
    "------Face Primer",
    "------Makeup Remover",
    "------Bronzer",
    "------BB Cream",
    "------Loose Powder",
    "------Setiig Spray",
    "------Makeup Kit",
    "------CC Cream",
  ];
  return (
    <div
      className="mid_nav_main"
      style={{ backgroundColor: "rgb(247,247,247)" }}
    >
      <div className="mid_nav_mid">
        <div className="mid_nav_first">
          <div style={{ width: "30%", paddingLeft: "5%", marginTop: "-15px" }}>
            <Link to={"/"}>
              <img style={{ width: "100%" }} src={logo1} />{" "}
            </Link>
          </div>
          <div className="logo_div">
            <div
              className="user"
              onClick={() => seloginDropDown2(!loginDropDown2)}
            >
              <BsPersonFill />
            </div>
            {loginDropDown2 ? (
              <>
                <div id="content_dropdown2" onMouseOut={doIt}>
                  <Link to="/login">
                    <div
                      id="login_dropdown"
                      onClick={() => seloginDropDown2(!loginDropDown2)}
                    >
                      Login
                    </div>
                  </Link>
                  <Link to="/signup">
                    <div
                      id="register_dropdown"
                      onClick={() => seloginDropDown2(!loginDropDown2)}
                    >
                      Register
                    </div>
                  </Link>
                  <Link to="/admin">
                    {" "}
                    <div
                      id="register_dropdown"
                      onClick={() => seloginDropDown2(!loginDropDown2)}
                    >
                      Admin
                    </div>
                  </Link>
                </div>
              </>
            ) : null}
          </div>
          <div className="search_div">
            <select className="select">
              <option>All Categories</option>
              {data.map((item) => (
                <option value="option1">{item}</option>
              ))}
            </select>
            <input className="input" type="search" style={{ border: "none" }} />
            <div className="search_icon">
              <FiSearch />
            </div>
          </div>
        </div>
        <div className="mid_nav_sec">
          <div className="like_div">
            <BsSuitHeartFill />
          </div>
          <div style={{ display: "flex", cursor: "pointer" }}>
            <div
              className="user_div"
              onClick={() => seloginDropDown(!loginDropDown)}
            >
              <BsPersonFill />
            </div>
            {loginDropDown ? (
              <>
                <div id="content_dropdown">
                  <Link to="/login">
                    <div
                      id="login_dropdown"
                      onClick={() => seloginDropDown(!loginDropDown)}
                    >
                      Login
                    </div>
                  </Link>
                  {name ? (
                    <div
                      id="register_dropdown"
                      onClick={() => {
                        seloginDropDown(!loginDropDown);
                        localStorage.removeItem("UserToken");
                      }}
                    >
                      Log Out
                    </div>
                  ) : (
                    <Link to="/signup">
                      <div
                        id="register_dropdown"
                        onClick={() => seloginDropDown(!loginDropDown)}
                      >
                        Register
                      </div>
                    </Link>
                  )}
                  {/* <Link to="/admin">
                    {" "}
                    <div
                      id="register_dropdown"
                      onClick={() => seloginDropDown(!loginDropDown)}
                    >
                      Admin
                    </div>
                  </Link> */}
                </div>
              </>
            ) : null}
            <div
              className="text"
              style={{ marginTop: "9px", marginLeft: "9px" }}
            >
              {name ? userNmae : "My Account"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div id="content" onClick={() => { seloginDropDown(!loginDropDown)}}>My Account</div>
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
                </div> */
}
