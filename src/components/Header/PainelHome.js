
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
    render() {
        return (
            <>
                <div class="header">
                    <div class="content">
                        <div class="head">
                            <span class="logo">Shawime</span>
                            <span class="slogan">Share With Me</span>
                        </div>
                        <div class="content-modals">
                            <div class="box box-free">
                                <span class="text">Sign in and chat for free</span>
                                <span class="type">Free version</span>
                                <button type="submit" class="start">Start Free</button>
                            </div>
                            <div class="box box-pro">
                                <span class="text">Chat with professionals</span>
                                <span class="type">Pro version</span>
                                <button type="submit" class="start">Start Pro</button>
                            </div>
                        </div>
                    </div>
                    <div class="curva"><svg class="curva-svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-0.84,99.17 C258.17,250.16 270.59,-156.41 503.67,120.88 L500.00,0.00 L0.00,0.00 Z" ></path></svg></div>
                </div>
            </>
        );
    }
}

export default Login;