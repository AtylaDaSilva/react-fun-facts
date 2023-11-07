import React from "react";
import logo from "../img/logo.svg";
import '../css/Header.css';

import ThemeButton from "./ThemeButton";
import '../css/ThemeButton.css';

function Header(props) { 
  const theme = props.theme;
    return (
      <header>
        <nav className={ `myNav` + (theme==='dark' ? ' nav-dark' : ' nav-light') }>
          <div className="brand">
            <img src={logo} className="navImage"></img>
            <h1>React Facts</h1>
          </div>
          <div className="nav-subcontent">
            <h2 className="navbar-subtitle inline-block">React Course - Project 1</h2>
            <ThemeButton theme={theme} callbacks={ props.callbacks } />
          </div>
        </nav>
      </header>
    );
}
  
export default Header;