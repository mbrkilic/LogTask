import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">

    
     
      <a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a>
      <a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a> 

    </nav>
  );
};

export default Navbar;