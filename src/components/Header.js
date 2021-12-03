import React from "react";
import Logo from "../assets/logo.svg";
/**
 * Componente Header.
 */
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
