import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/shawime-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "bootstrap/dist/css/bootstrap.css";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeLayout from "layouts/Home.js";
import { StoreProvider } from "variables/store";
import { isAuthenticated } from "./service/Auth.service";

const hist = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/auth/login", state: { from: props.location } }}
        />
      )
    }
  />
);

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/" render={(props) => <HomeLayout {...props} />} />
      <Redirect to="/" />
    </Switch>
    <ToastContainer closeButton={true} position="top-right" />
  </Router>,
  document.getElementById("root")
);
