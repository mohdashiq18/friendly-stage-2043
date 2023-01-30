import "./NavBar.css";
import logo from "./beautybebo_logo.png";
import { BiSearch } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MiddleLogoDiv = () => {
  const [loginDropDown, seloginDropDown] = useState(false);
  return (
    <div id="middle_logo_div">
      <div id="logo_div">
        <Link to="/">
          {" "}
          <img
            style={{ height: "50px", marginTop: "-15px" }}
            src={logo}
            alt=""
          />
        </Link>
      </div>

      <div id="search_div">
        <div id="all_category">
          <select name="all_category" id="all_category_select">
            <option value="All Category">All Category</option>
            <option value="Makeup">--Makeup</option>
            <option value="FACE">----Face</option>
            <option value="Foundation">-------Foundation</option>
            <option value="Blush">-------Blush</option>
            <option value="Highlighters">-------Highlighters</option>
            <option value="Concealer">-------Concealer</option>
            <option value="Compact & Power">-------Compact & Power</option>
            <option value="Face & Primer">-------Face & Primer</option>
            <option value="Makeup Remover">-------Makeup Remover</option>
            <option value="Contour">-------Contour</option>
            <option value="Bronzer">-------Bronzer</option>
          </select>
        </div>
        <div id="search_inpt_div">
          <input
            type="text"
            name=""
            id="search_inpt"
            placeholder="Enter your search..."
          />
        </div>
        <div id="search_btn">
          <BiSearch />
        </div>
      </div>

      <div id="profile_div">
        <div id="fav_div">
          <MdFavorite />
        </div>
        <div id="account_div">
          <div id="avatar">
            <FaUser />
          </div>
          <div
            id="content"
            onClick={() => {
              seloginDropDown(!loginDropDown);
            }}
          >
            My Account
          </div>
          {loginDropDown ? (
            <>
              <div id="content_dropdown">
                <Link to="/login">
                  <div id="login_dropdown">Login</div>
                </Link>
                <Link to="/signup">
                  <div id="register_dropdown">Register</div>
                </Link>
                <Link to="/admin">
                  {" "}
                  <div id="register_dropdown">Admin</div>
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
