import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />

      <div>
        <Link to="/tvshoes">TV Shows</Link>
        <Link to="/tvshoes">Movies</Link>
        <Link to="/tvshoes">Recently Added</Link>
        <Link to="/tvshoes">My List</Link>
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
