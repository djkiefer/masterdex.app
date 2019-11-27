import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header row">
        <span className="display-4 pl-3">Welcome, trainer!</span>
      </div>
    );
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

export default Header;
