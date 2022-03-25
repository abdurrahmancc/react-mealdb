import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-primary ">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <li>Logo</li>
          </div>
          <div className="col-md-10">
            <ul className="d-flex justify-content-end ">
              <li>Home</li>
              <li>Contact</li>
              <li>Cart</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
