import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { UserService } from "../service/User.service";
import ReactCodeInput from "react-verification-code-input";
import { toast } from "react-toastify";
import { login, usuario } from "./../service/Auth.service";

class Login extends React.Component {
  constructor() {
    super();
    this.userService = new UserService();
    this.fileInput = React.createRef();
    this.state = {
      showForm: true,
      showVerifyCode: false,
      showRecoveryPassword: false,
      emailRecovery: "",
      token: "",
      tokenError: null,
      userId: null,
      form: {
        email: "",
        password: "",
      },
      formErrors: {
        fullname: null,
        username: null,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.helpList = [
      { value: true, label: "Quero ajudar" },
      { value: false, label: "Preciso de ajuda" },
    ];
  }

  handlePostResetPassword = () => {
    const { form, formErrors } = this.state;
    const req = {
      email: form.emailRecovery,
    };

    this.userService.resetPassword(req).then((res) => {
      if (!res.error) {
        toast.success("Verify your sandbox");
        this.handleResetLoginForm();
      }
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};
    formObj = {
      ...form,
      [name]: value,
    };

    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};
      const errorMsg = this.validateField(name, value);
      formErrorsObj = { ...formErrors, [name]: errorMsg };
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      let refValue = null;
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);

    const req = {
      email: form.email,
      password: form.password,
    };

    this.userService.authenticate(req).then((res) => {
      if (!res.error) {
        toast.success("Loggin with success");
        login(res.data.token);
        const userLogin = res.data.user;
        usuario(userLogin);
        console.log(userLogin);
        this.props.history.push("/admin/dashboard");
      }
      if (res.error) {
        if (res.error && res.userStatusBlock) {
          this.handleVerifyCodeShow();
          this.setState({ userId: res._id });
        }
      }
    });
  };

  handleToken = (e) => {
    if (!e) {
      this.setState({ tokenError: "Please insert code verify" });
      return;
    }
    if (e.length < 6) {
      this.setState({ tokenError: "Please complete code verify" });
      return;
    }
    this.setState({ token: e });
    this.setState({ tokenError: null });
    return;
  };

  handleSubmitVerifyEmail = () => {
    console.log("fazendo login", this.state.userId, this.state.token);
    if (!this.state.token) {
      toast.error("Please set your verify code");
    }

    this.userService
      .confirmEmail(this.state.userId, this.state.token)
      .then((res) => {
        if (!res.error) {
          toast.success("Success verify mail");
          this.handleResetLoginForm();
        }
      });
  };

  handleChangeRecoveryPassword = (e) => {
    this.setState({
      showRecoveryPassword: true,
      showForm: false,
      showVerifyCode: false,
    });
  };

  handleResetLoginForm = (e) => {
    this.setState({
      showRecoveryPassword: false,
      showForm: true,
      showVerifyCode: false,
    });
  };

  handleVerifyCodeShow = (e) => {
    this.setState({
      showRecoveryPassword: false,
      showForm: false,
      showVerifyCode: true,
    });
  };

  handleCreateAccount = () => {
    // TODO: Redirect to auth/register
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case "email":
        if (!value) errorMsg = "Please enter your email.";
        break;
      case "password":
        if (!value) errorMsg = "Please enter your password.";
        break;
      default:
        break;
    }
    return errorMsg;
  };

  render() {
    const { form, formErrors } = this.state;
    return (
      <>
        <Col lg="5" md="7">
          <Card className="shadow border-0">
            <CardHeader className="bg-transparent">
              {this.state.showForm && this.state.showForm && (
                <div>
                  <div className="text-muted text-center mt-2 mb-3">
                    <small>Sign in with</small>
                  </div>
                  <div className="btn-wrapper text-center">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="#pablo"
                      disabled
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="btn-inner--icon">
                        <img
                          alt="..."
                          src={require("assets/img/icons/common/google.svg")}
                        />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </Button>
                  </div>
                </div>
              )}
              {this.state.showVerifyCode &&
                !this.state.showForm &&
                !this.state.showRecoveryPassword && (
                  <Row>
                    <Col md="12" lg="12">
                      <div className="text-center mt-2 mb-4">
                        <small>Confirm your E-mail</small>
                      </div>
                    </Col>
                  </Row>
                )}
              {!this.state.showForm &&
                !this.state.showVerifyCode &&
                this.state.showRecoveryPassword && (
                  <Row>
                    <Col md="12" lg="12">
                      <div className="text-center mt-2 mb-4">
                        <small>Please inform your E-mail</small>
                      </div>
                    </Col>
                  </Row>
                )}
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              {!this.state.showForm &&
                !this.state.showVerifyCode &&
                this.state.showRecoveryPassword && (
                  <Row>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>
                          Email:<span className="asterisk"></span>
                        </label>
                        <input
                          className={
                            formErrors.emailRecovery && formErrors.emailRecovery
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          type="text"
                          name="emailRecovery"
                          value={form.emailRecovery}
                          onChange={this.handleChange}
                          onBlur={this.handleChange}
                        />
                        {formErrors.emailRecovery && (
                          <span className="input-error-text">
                            {formErrors.emailRecovery}
                          </span>
                        )}
                      </div>
                    </div>
                  </Row>
                )}
              {this.state.showForm &&
                !this.state.showVerifyCode &&
                !this.state.showRecoveryPassword && (
                  <Col>
                    <div className="text-center text-muted mb-4">
                      <small>Or sign in with credentials</small>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            Email:<span className="asterisk"></span>
                          </label>
                          <input
                            className={
                              formErrors.email && formErrors.email
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={this.handleChange}
                            onBlur={this.handleChange}
                          />
                          {formErrors.email && (
                            <span className="input-error-text">
                              {formErrors.email}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            Password:<span className="asterisk"></span>
                          </label>
                          <input
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
                        </div>
                      </div>
                    </div>
                  </Col>
                )}
              {this.state.showVerifyCode &&
                !this.state.showForm &&
                !this.state.showRecoveryPassword && (
                  <Row>
                    <Col md="12" lg="12">
                      <div className="form-group">
                        <label>
                          Verify code:
                          <span className="asterisk"></span>
                        </label>
                        <ReactCodeInput
                          name="token"
                          onChange={this.handleToken}
                        />
                        {this.state.tokenError && (
                          <span className="input-error-text">
                            {this.state.tokenError}
                          </span>
                        )}
                      </div>

                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="submit"
                          onClick={this.handleSubmitVerifyEmail}
                        >
                          Confirmation account
                        </Button>
                      </div>
                    </Col>
                  </Row>
                )}
              {!this.state.showVerifyCode &&
                this.state.showForm &&
                !this.state.showRecoveryPassword && (
                  <Row>
                    <Col md="12" lg="12">
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="submit"
                          onClick={this.handleSubmit}
                        >
                          LOGIN
                        </Button>
                      </div>
                    </Col>
                  </Row>
                )}
              {!this.state.showVerifyCode &&
                !this.state.showForm &&
                this.state.showRecoveryPassword && (
                  <Row>
                    <Col md="12" lg="12">
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="submit"
                          onClick={this.handlePostResetPassword}
                        >
                          Reset password
                        </Button>
                      </div>
                    </Col>
                  </Row>
                )}
            </CardBody>
          </Card>
          {this.state.showForm &&
            !this.state.showVerifyCode &&
            !this.state.showRecoveryPassword && (
              <Row className="mt-3">
                <Col xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={this.handleChangeRecoveryPassword}
                  >
                    <small>Forgot password?</small>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={this.handleCreateAccount}
                  >
                    <small>Create new account</small>
                  </a>
                </Col>
              </Row>
            )}
          {!this.state.showForm &&
            !this.state.showVerifyCode &&
            this.state.showRecoveryPassword && (
              <Row className="mt-3">
                <Col xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={this.handleResetLoginForm}
                  >
                    <small>Login</small>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={this.handleCreateAccount}
                  >
                    <small>Create new account</small>
                  </a>
                </Col>
              </Row>
            )}
        </Col>
      </>
    );
  }
}

export default Login;
