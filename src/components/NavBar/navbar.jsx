import React from "react";
import "./navbar.css";
const NavBar = (props) => {
  const {user} = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <img
        src={user.avatar_url}
        alt="profile"
        className="m-3 avatar"
        style={{width: "30px", height: "30px"}}
      />
      <h3 style={{ color: "white" }}>{user.name}</h3>
      <a
        href="/"
        className="d-flex align-items-center"
        style={{ marginLeft: "auto", marginRight: "10px" }}
      >
        Search for Other User
      </a>
    </nav>
  );
};

export default NavBar;
