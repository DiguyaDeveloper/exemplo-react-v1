import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import HomeNavbar from "components/Navbars/HomeNavbar";
import HomeFooter from "components/Footer/HomeFooter";
import PainelHome from "components/Header/PainelHome";

import routes from "routes.js";

class Auth extends React.Component {
    // componentDidMount() {
    //     document.body.classList.add("bg-default");
    // }
    // componentWillUnmount() {
    //     document.body.classList.remove("bg-default");
    // }
    getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/home") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    render() {
        return (
            <>
                <div class="body-home">
                    <HomeNavbar />
                    <PainelHome />
                    {/* Page content */}
                    <Switch>
                        {this.getRoutes(routes)}
                        <Redirect from="*" to="/home" />
                    </Switch>
                    <HomeFooter />
                </div>
            </>
        );
    }
}

export default Auth;
