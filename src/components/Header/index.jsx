import React from 'react';
import './index.css';
import logo from "../../logo.png";

const Header = () => {
    return (
        <nav className="navbar menu">
          <div className="logoSquad">
            <img src={logo} className="venturusLogo" alt="venturus logo"/>
            <h2 className="squadTool">Squad Management Tool</h2>
          </div>
          <div className="userNameCircle">
            <h5 className="username">John Doe</h5>
            <div className="usercircle">
              <h4 className="textcircle">JD</h4>
            </div>
          </div>
        </nav>
    )
}

export default Header;