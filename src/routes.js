import Dashboard from "views/Dashboard.js";
import RegisterUser from "views/RegisterUser";
import Register from "views/Register";
import Login from "views/Login";
import Home from "views/Home";

import Logout from "views/Logout";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Meu perfil",
    icon: "fa fa-user",
    component: RegisterUser,
    layout: "/admin",
  },
  {
    path: "/",
    name: "LOGOUT",
    icon: "nc-icon nc-spaceship",
    component: Logout,
    layout: "/home",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    active: false,
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    active: false,
  },
  {
    path: "/",
    name: "Home",
    icon: "ni ni-circle-08 text-pink",
    component: Home,
    layout: "/home",
  },
];
export default routes;
