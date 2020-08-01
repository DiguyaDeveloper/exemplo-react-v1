import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Button,
} from "reactstrap";
import { toast } from "react-toastify";
import { state } from "./../variables/states";
import { UserService } from "./../service/User.service";
import { getUserLogado } from "./../service/Auth.service";
import {
  login,
  usuario,
  getUserImage,
  userImage,
  logout,
} from "./../service/Auth.service";

class RegisterUser extends React.Component {
  listStates = state;
  file;
  userLogadoSistem;
  imagemUserLogado;

  constructor() {
    super();
    this.fileInput = React.createRef();
    this.userService = new UserService();
    this.state = {
      showForm: true,
      showVerifyCode: false,
      token: "",
      tokenError: null,
      userId: null,
      form: {
        fullname: "",
        username: "",
        email: "",
        password: "",
        picture: [],
        confirmPassword: "",
        help: null,
        country: "Brazil",
        acceptTerm: null,
        uf: "AC",
      },
      formErrors: {
        fullname: null,
        username: null,
        email: null,
        password: null,
        confirmPassword: null,
        help: null,
        country: null,
        picture: null,
        acceptTerm: false,
        uf: null,
      },
    };

    this.imagemUserLogado = getUserImage();
    console.log(this.imagemUserLogado);
  }

  getUsuarioLogado = () => {
    this.userLogadoSistem = JSON.parse(getUserLogado());
  };

  handleSubmit = () => {
    const { form, formErrors } = this.state;

    const req = {
      fullname: form.fullname,
      email: form.email,
      username: form.username,
      password: form.password,
      state: form.state,
      country: form.country,
      help: form.help,
      acceptTerm: form.acceptTerm,
    };

    this.userService.putProfile(req, this.file).then((res) => {
      console.log(res);
      if (!res.error) {
        this.setState({ showForm: false, showVerifyCode: true });
        toast.success("Success Update profile");
        logout();
        this.props.history.push("/");
        if (res.data._id) {
          this.setState({ userId: res.data._id });
        }
      }
    });
  };

  handleChange = (e) => {
    const { name, value, checked } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};
    formObj = {
      ...form,
      [name]: value,
    };

    if (name === "picture") {
      var files = e.target.files;
      var filesArr = Array.prototype.slice.call(files);
      console.log(filesArr[0]);
      this.file = filesArr[0];
    }
    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};
      if (name === "password" || name === "confirmPassword") {
        let refValue = this.state.form[
          name === "password" ? "confirmPassword" : "password"
        ];
        const errorMsg = this.validateField(name, value, refValue);
        formErrorsObj = { ...formErrors, [name]: errorMsg };
        if (!errorMsg && refValue) {
          formErrorsObj.confirmPassword = null;
          formErrorsObj.password = null;
        }
      } else {
        const errorMsg = this.validateField(name, value);
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      }
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case "fullname":
        if (!value) errorMsg = "Please enter Full name.";
        break;
      case "username":
        if (!value) errorMsg = "Please enter username.";
        break;
      case "email":
        if (!value) errorMsg = "Please enter Email.";
        else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        )
          errorMsg = "Please enter valid Email.";
        break;
      case "country":
        if (!value) errorMsg = "Please select Country.";
        break;
      case "picture":
        if (!value) errorMsg = "Please select your image profile.";
        break;
      case "password":
        if (!value) errorMsg = "Please enter Password.";
        else if (refValue && value !== refValue)
          errorMsg = "Password and Confirm Password does not match.";
        break;
      case "confirmPassword":
        if (!value) errorMsg = "Please enter Confirm Password.";
        else if (refValue && value !== refValue)
          errorMsg = "Password and Confirm Password does not match.";
        break;
      default:
        break;
    }
    return errorMsg;
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      let refValue = null;
      if (x === "password" || x === "confirmPassword") {
        refValue = form[x === "password" ? "confirmPassword" : "password"];
      }
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  render() {
    const { form, formErrors } = this.state;
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
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-user">
                <div className="image">
                  {/* <img alt="..." src={require("assets/img/damir-bosnjak.jpg")} /> */}
                </div>
                <CardBody>
                  <div className="author">
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={this.imagemUserLogado}
                      />
                    </a> */}
                    <Form className="mt-5">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>E-mail</label>
                            <Input
                              disabled
                              name="email"
                              value={email}
                              placeholder="Your email"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Username</label>
                            <Input
                              name="Username"
                              value={username}
                              disabled
                              placeholder="Your username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label htmlFor="inputNickName">Name</label>
                            <Input
                              className={
                                formErrors.fullname && formErrors.fullname
                                  ? "is-invalid form-control"
                                  : "form-control"
                              }
                              type="text"
                              name="fullname"
                              value={form.fullname}
                              onChange={this.handleChange}
                              onBlur={this.handleChange}
                            />
                            {formErrors.fullname && (
                              <span className="input-error-text">
                                {formErrors.fullname}
                              </span>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Password</label>
                            <Input
                              className={
                                formErrors.password && formErrors.password
                                  ? "is-invalid form-control"
                                  : "form-control"
                              }
                              type="password"
                              name="password"
                              value={form.password}
                              onChange={this.handleChange}
                              onBlur={this.handleChange}
                            />
                            {formErrors.password && (
                              <span className="input-error-text">
                                {formErrors.password}
                              </span>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Confirm password</label>
                            <Input
                              className={
                                formErrors.confirmPassword &&
                                formErrors.confirmPassword
                                  ? "is-invalid form-control"
                                  : "form-control"
                              }
                              type="password"
                              name="confirmPassword"
                              value={form.confirmPassword}
                              onChange={this.handleChange}
                              onBlur={this.handleChange}
                            />
                            {formErrors.confirmPassword && (
                              <span className="input-error-text">
                                {formErrors.confirmPassword}
                              </span>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>UF</label>
                            <select
                              className={
                                formErrors.state && formErrors.state
                                  ? "is-invalid form-control"
                                  : "form-control"
                              }
                              name="uf"
                              value={form.uf}
                              onChange={this.handleChange}
                            >
                              {this.listStates.map((state) => {
                                return (
                                  <option value={state.key} key={state.key}>
                                    {state.value}
                                  </option>
                                );
                              })}
                            </select>
                            {formErrors.country && (
                              <span className="input-error-text">
                                {formErrors.country}
                              </span>
                            )}
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Country</label>
                            <Input
                              className={
                                formErrors.country && formErrors.country
                                  ? "is-invalid form-control"
                                  : "form-control"
                              }
                              type="text"
                              name="country"
                              value={form.country}
                              disabled
                              onChange={this.handleChange}
                              onBlur={this.handleChange}
                            />
                            {formErrors.country && (
                              <span className="input-error-text">
                                {formErrors.country}
                              </span>
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <div className="update ml-auto mr-auto">
                          <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                            onClick={this.handleSubmit}
                          >
                            Update Profile
                          </Button>
                        </div>
                      </Row>
                    </Form>
                  </div>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default RegisterUser;
