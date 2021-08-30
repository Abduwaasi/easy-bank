import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import { navLinks } from "../data";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a href="#home">
            <img src={logo} alt="Easy bank icon" className="logo" />
          </a>
          <button
            className="nav-toggle"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {!toggleMenu ? (
              <img src={hamburger} alt="menu button" />
            ) : (
              <img src={close} alt="menu button" />
            )}
          </button>
        </div>

        <ul className={toggleMenu ? `nav-menu show` : `nav-menu`}>
          {navLinks.map((item) => {
            const { id, url, link } = item;
            return (
              <li key={id}>
                <a href={url} className="nav-link">
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="custom-btn">Request Invite</button>
      </div>
    </nav>
  );
};

export default Header;
