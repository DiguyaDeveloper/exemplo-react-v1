import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import UserPage from "views/User.js";
import RegisterUser from "views/RegisterUser";
import Register from "views/Register";
import Login from "views/Login";
import Home from "views/Home";

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
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "LOGOUT",
    icon: "nc-icon nc-spaceship",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  }, {
    path: "/",
    name: "Home",
    icon: "ni ni-circle-08 text-pink",
    component: Home,
    layout: "/home",
  },
];
export default routes;
