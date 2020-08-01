import React from "react";

import { Link } from "react-router-dom";
// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <div class="menu">
          <div class="left">
            <div class="logo">
              <span></span>
            </div>
            <div class="options">
              <div>Home</div>
              <div>Work</div>
              <div>about</div>
              <div>Company</div>
            </div>
          </div>
          <div class="user">
            <button type="submit" class="login">
              <Link to={"/auth/login"}>Log in </Link>
            </button>

            <button type="submit" class="login">
              <Link to={"/auth/register"}>Sign up</Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
