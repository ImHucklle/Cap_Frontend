import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/bi";
import "./Header.css";
import { navItems } from "./NavItems";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

function Header(){
  const [dropdown, setDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const logOut = ()=>{
    localStorage.removeItem("token");
    setCurrentUser({})
    console.log('User has logged out')
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/search" className="navbar-logo">
          W2E
          <Icons.BiFoodMenu />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Profile") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button logout={logOut}/>
      </nav>
    </>
  );
}

export default Header;