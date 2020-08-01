import React from "react";
import { Button, Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { UserService } from "../service/User.service";
import { state } from "./../variables/states";
import ReactCodeInput from "react-verification-code-input";
import { toast } from "react-toastify";

class Register extends React.Component {
  createUser;
  file;
  listStates = state;

  constructor() {
    super();
    this.userService = new UserService();
    this.fileInput = React.createRef();
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
    this.handleChange = this.handleChange.bind(this);
    this.helpList = [
      { value: true, label: "Quero ajudar" },
      { value: false, label: "Preciso de ajuda" },
    ];
  }

  validateNumber = (evt) => {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === "paste") {
      key = theEvent.clipboardData.getData("text/plain");
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
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
        }
      });
  };

  handleSubmit = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }

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

    this.userService.createUser(req, this.file).then((res) => {
      if (!res.error) {
        this.setState({ showForm: false, showVerifyCode: true });
        if (res.data._id) {
          this.setState({ userId: res.data._id });
          this.props.history.push("/auth/login");
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
      case "help":
        if (!value) errorMsg = "Please select your motive.";
        break;
      case "picture":
        if (!value) errorMsg = "Please select your image profile.";
        break;
      case "acceptTerm":
        if (!value) errorMsg = "You must agree before submitting.";
        break;
      case "password":
        // refValue is the value of Confirm Password field
        if (!value) errorMsg = "Please enter Password.";
        else if (refValue && value !== refValue)
          errorMsg = "Password and Confirm Password does not match.";
        break;
      case "confirmPassword":
        // refValue is the value of Password field
        if (!value) errorMsg = "Please enter Confirm Password.";
        else if (refValue && value !== refValue)
          errorMsg = "Password and Confirm Password does not match.";
        break;
      case "confirmToken":
        if (!value) errorMsg = "Please enter a Confirmation Token.";
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
    return (
      <>
        <Col lg="6" md="12">
          <Card className="shadow border-0">
            <CardHeader className="bg-transparent px-lg-5 py-lg-1">
              {this.state.showForm && this.state.showForm && (
                <Row>
                  <Col md="12" lg="12">
                    <div className="text-center mt-2 mb-4">
                      <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                      <Button
                        disabled
                        className="btn-neutral btn-icon"
                        color="default"
                        href="#pablo"
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
                  </Col>
                </Row>
              )}
              {!this.state.showForm && !this.state.showForm && (
                <Row>
                  <Col md="12" lg="12">
                    <div className="text-center mt-2 mb-4">
                      <small>Confirm your E-mail</small>
                    </div>
                  </Col>
                </Row>
              )}
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-1">
              {this.state.showForm && this.state.showForm && (
                <Row>
                  <Col md="12" lg="12">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Full name:<span className="asterisk"></span>
                          </label>
                          <input
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
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Username:<span className="asterisk"></span>
                          </label>
                          <input
                            className={
                              formErrors.username && formErrors.username
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={this.handleChange}
                            onBlur={this.handleChange}
                          />
                          {formErrors.username && (
                            <span className="input-error-text">
                              {formErrors.username}
                            </span>
                          )}
                        </div>
                      </div>

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
                        <div className="row">
                          <div className="col-md-6">
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
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Confirm Password:
                                <span className="asterisk"></span>
                              </label>
                              <input
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
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Country:<span className="asterisk"></span>
                              </label>
                              <input
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
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                UF:<span className="asterisk"></span>
                              </label>
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
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>
                            Pictury:<span className="asterisk"></span>
                          </label>
                          <div className="custom-file">
                            <input
                              name="picture"
                              type="file"
                              ref={this.fileInput}
                              className="custom-file-input"
                              id="validatedCustomFile"
                              onChange={this.handleChange}
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="validatedCustomFile"
                            >
                              {form.picture === null && (
                                <span>Choose file...</span>
                              )}
                              {form.picture !== null && form.picture}
                            </label>
                            <div className="invalid-feedback">
                              Example invalid custom file feedback
                            </div>
                          </div>
                          {formErrors.picture && (
                            <span className="input-error-text">
                              {formErrors.picture}
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <label className="mr-3">
                            <span className="asterisk"></span>
                          </label>
                          <div className="form-control border-0 p-0 pt-1">
                            <label className="mr-2 radio-custom">
                              <input
                                type="radio"
                                name="help"
                                value="false"
                                checked={form.help === "false"}
                                onChange={this.handleChange}
                              />{" "}
                              Você está tendo um problema neste momento e
                              gostaria de conversar com alguém?
                            </label>
                            <label className="radio-custom">
                              <input
                                type="radio"
                                name="help"
                                value="true"
                                checked={form.help === "true"}
                                onChange={this.handleChange}
                              />{" "}
                              Você já passou por algum problema e gostaria de
                              ajudar alguém?
                            </label>
                          </div>
                          {formErrors.help && (
                            <span className="input-error-text ml-5">
                              {formErrors.help}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          className={
                            formErrors.acceptTerm && formErrors.acceptTerm
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                          type="checkbox"
                          id="invalidCheck3"
                          name="acceptTerm"
                          value="true"
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label">
                          Agree to terms and conditions
                        </label>
                        {formErrors.acceptTerm && (
                          <span className="invalid-feedback">
                            You must agree before submitting.
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <Button
                        className="mt-4"
                        color="primary"
                        type="submit"
                        onClick={this.handleSubmit}
                      >
                        Create account
                      </Button>
                    </div>
                  </Col>
                </Row>
              )}
              {this.state.showVerifyCode &&
                !this.state.showForm &&
                !this.state.showForm && (
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
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
