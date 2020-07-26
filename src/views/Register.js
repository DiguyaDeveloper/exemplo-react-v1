import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
} from "react-reactive-form";

const TextInput = ({ handler, touched, hasError, meta, invalid }) => (
  <div>
    <FormGroup>
      <InputGroup className="input-group-alternative mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="ni ni-hat-3" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          className={`${invalid}` ? "is-invalid form-control" : "form-control"}
          placeholder={`${meta.label}`}
          {...handler()}
        />
      </InputGroup>
    </FormGroup>
    {touched && `${invalid}` && (
      <span className="is-invalid">Campo obrigatório</span>
    )}
  </div>
);

class Register extends React.Component {
  registerForm = FormBuilder.group({
    fullname: ["", Validators.required],
    email: ["", Validators.required],
    username: ["", Validators.required],
    password: ["", Validators.required],
    state: ["", Validators.required],
    country: ["", Validators.required],
    picture: ["", Validators.required],
    help: [false, Validators.required],
    acceptTerm: [false, Validators.required],
  });
  handleReset = () => {
    this.registerForm.reset();
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Form values", this.registerForm.value);
    console.log(this.getregisterForm);
    console.log(this.getregisterForm.fullname.status);
  };

  get getregisterForm() {
    return this.registerForm.controls;
  }

  render() {
    return (
      <>
        <Col lg="10" md="12">
          <Card className="shadow border-0">
            <CardHeader className="bg-transparent px-lg-5 py-lg-1">
              <Row>
                <Col md="12" lg="6"></Col>
                <Col md="12" lg="6">
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
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-1">
              <Row>
                <Col md="12" lg="6">
                  <div className="container-text">
                    <div className="container-text-1-title">
                      <div className="div-img">
                        <span className="btn-inner--icon pl-3 pr-3">
                          <img
                            alt="..."
                            src={require("assets/img/icons/common/google.svg")}
                          />
                        </span>
                      </div>
                      <div className="div-text">
                        Para pessoas que querem ajudar
                      </div>
                    </div>
                    <div className="container-text-1">
                      Ajudamos pessoas que ja passaram por momentos ruins a
                      ajudar outras pessoas que passam pelos mesmos problemas.
                    </div>
                  </div>
                  <div className="container-text">
                    <div className="container-text-1-title">
                      <div className="div-img">
                        <span className="btn-inner--icon pl-3 pr-3">
                          <img
                            alt="..."
                            src={require("assets/img/icons/common/google.svg")}
                          />
                        </span>
                      </div>
                      <div className="div-text">
                        Para pessoas que procuram ajuda
                      </div>
                    </div>
                    <div className="container-text-1">
                      Ajudamos pessoas que estão passando por momentos ruins a
                      encontrar ajuda de outras pessoas.
                    </div>
                  </div>
                </Col>
                <Col md="12" lg="6">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign up with credentials</small>
                  </div>
                  <FieldGroup
                    control={this.registerForm}
                    render={({ get, invalid }) => (
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <FieldControl
                          name="fullname"
                          render={TextInput}
                          meta={{ label: "fullname" }}
                          invalid={this.getregisterForm.fullname.errors}
                        />
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="email"
                              autoComplete="new-email"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="username" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Password" type="password" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="new-password"
                            />
                          </InputGroup>
                        </FormGroup>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span className="text-muted">
                                  I agree with the{" "}
                                  <a
                                    className="termo-condit"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    Privacy Policy
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            type="submit"
                            onClick={this.handleSubmit}
                            disabled={invalid}
                          >
                            Create account
                          </Button>
                        </div>
                      </Form>
                    )}
                  ></FieldGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
