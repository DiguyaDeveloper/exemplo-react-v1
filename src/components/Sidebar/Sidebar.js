import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
import { getUserLogado } from "../../service/Auth.service";
import { UserService } from "../../service/User.service";
import {
  login,
  usuario,
  getUserImage,
  userImage,
} from "../../service/Auth.service";
var ps;

class Sidebar extends React.Component {
  userLogadoSistem;

  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
    this.userService = new UserService();

    this.state = {
      img_user: "",
      acceptTerm: "",
      confirmation_code: "",
      country: "",
      createdAt: "",
      email: "",
      fullname: "",
      help: "",
      picture: "",
      state: "",
      statusAccount: "",
      updatedAt: "",
      username: "",
      _id: "",
    };

    this.getImageUsuario();
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }

  getUsuarioLogado = () => {
    this.userLogadoSistem = JSON.parse(getUserLogado());
  };

  getImageUsuario = () => {
    let img;
    this.userService.getImagemUser().then((res) => {
      console.log(this.userLogadoSistem);
      img = res.data.find((element) => {
        if (element.title === this.userLogadoSistem.picture) {
          return element.img_url;
        }
      });
      console.log(img);
      this.setState((prev) => ({
        ...prev,
        img_user: img.img_url,
      }));

      userImage(img.img_url);
    });
  };

  render() {
    this.getUsuarioLogado();

    const {
      acceptTerm,
      confirmation_code,
      country,
      createdAt,
      email,
      fullname,
      help,
      picture,
      state,
      statusAccount,
      updatedAt,
      username,
      _id,
    } = this.userLogadoSistem;

    // console.log("joao lindo", this.state);
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <div className="sidebar-profile">
            <div className="sidebar-profile-info">
              <div className="logo-img">
                <img src={this.state.img_user} alt="user - Image" />
              </div>
            </div>
            <p> {fullname} </p>
            <p>
              {" "}
              {state} - {country}{" "}
            </p>
          </div>
        </div>
        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
            {this.props.routes.map((prop, key) => {
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
