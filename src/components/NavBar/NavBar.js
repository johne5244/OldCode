import React from "react";
// import Side from "../SideBar/SideBar";
import "./NavBar.css";
// import Box from "@material-ui/icons/";
import {Link} from "react-router-dom";

function NavBar({toggle}) {
  return (
    <div className="header" onClick={toggle}>
      <div className="body">
        <Link to="/">
          {" "}
          <h2>John's Work</h2>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
