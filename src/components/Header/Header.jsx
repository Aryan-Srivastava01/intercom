import React from 'react';
import './Header.css'; // Import the CSS

const Header = ({ title, icon, rightComponent }) => {
  return (
    <div className="header-container">
      <div className="header-left">
        {icon && <span className="header-icon">{icon}</span>}
        <h2 className="header-title">{title}</h2>
      </div>
      {rightComponent && <div className="header-right">{rightComponent}</div>}
    </div>
  );
};

export default Header;
