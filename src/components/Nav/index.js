import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav id="nav1" className="navbar navbar-expand-lg navbar-light bg-light">

        <h3 >{props.children}</h3>

    </nav>
  );
}

export default Nav;
