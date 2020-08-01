import React from "react";
import { toast } from "react-toastify";
import { state } from "./../variables/states";
import { UserService } from "./../service/User.service";
import { logout } from "./../service/Auth.service";

import { Link, withRouter } from "react-router-dom";
class Logout extends React.Component {
  listStates = state;
  file;
  userLogadoSistem;
  imagemUserLogado;

  constructor() {
    super();
    this.fileInput = React.createRef();
    this.userService = new UserService();
    this.logout();
  }

  logout = () => {
    logout();
  };

  render() {
    return <></>;
  }
}

export default Logout;
