import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to = "/" >Home</Link> 
      <Link to="/connect">Connect To Wallet</Link>
      <p>
        Your Profile: {0} ETH / {0} USD
      </p>
      <p>
        Current Price: {0} ETH / {0} USD
      </p>
    </nav>
  );
};

export default Navbar
