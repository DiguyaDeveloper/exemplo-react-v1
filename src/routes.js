import Dashboard from "views/Dashboard.js";
import RegisterUser from "views/RegisterUser";
import Register from "views/Register";
import Login from "views/Login";
import Home from "views/Home";
import Hashtag from "views/Hashtag";
import Group from "views/Group";
import Chat from "views/Chat";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    identifier: "/admin/dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/profile",
    identifier: "/admin/profile",
    name: "Meu perfil",
    icon: "fa fa-user",
    component: RegisterUser,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    identifier: "/auth/login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    active: false,
  },
  {
    path: "/register",
    identifier: "/auth/register",
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
    identifier: "/home",
    component: Home,
    layout: "/home",
  },
  {
    path: "/hashtags",
    name: "Hashtags",
    icon: "nc-icon nc-bank",
    identifier: "/admin/hashtags",
    component: Hashtag,
    layout: "/admin",
  },
  {
    path: "/hashtag/:hash",
    name: "Groups",
    icon: "nc-icon nc-bank",
    component: Group,
    identifier: "admin/groups/hashtag",
    layout: "/admin/groups",
  },
  {
    path: "/room/:group",
    name: "Chat",
    identifier: "/admin/chat/room",
    icon: "nc-icon nc-bank",
    component: Chat,
    layout: "/admin/chat",
  },
];
export default routes;
