
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
    render() {
        return (
            <>
                <div class="menu">
                    <div class="left">
                        <div class="logo"><span>Logo</span></div>
                        <div class="options">
                            <div>Home</div>
                            <div>Work</div>
                            <div>about</div>
                            <div>Company</div>
                        </div>
                    </div>
                    <div class="user">
                        <button type="submit" class="login">Log in</button>
                        <button type="submit" class="sign-up">Sign up</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;