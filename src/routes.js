import RegisterUser from "views/RegisterUser";
import Register from "views/Register";
import Login from "views/Login";
import Home from "views/Home";
import Hashtag from "views/Hashtag";
import Group from "views/Group";
import Chat from "views/Chat";
import Dashboard from "views/Dashboard";

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
    path: "/",
    name: "Home",
    icon: "nc-icon nc-bank",
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
    path: "/profile",
    identifier: "/admin/profile",
    name: "Meu perfil",
    icon: "fa fa-user",
    component: RegisterUser,
    layout: "/admin",
  },
  {
    path: "/hashtag/:hash",
    component: Group,
    identifier: "admin/groups/hashtag",
    layout: "/admin/groups",
  },
  {
    path: "/room/:group",
    component: Chat,
    layout: "/admin/chat",
  },
  {
    path: "/login",
    identifier: "/auth/login",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    identifier: "/auth/register",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
