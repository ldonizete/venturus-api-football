import React from 'react';
import './index.css';

const Footer = () => {
    return(
      <div>
        <div className="phantom"/>
        <div className="footer">
          <p>
              {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    )
}

export default Footer;