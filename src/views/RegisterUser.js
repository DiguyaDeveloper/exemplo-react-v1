import React from "react";
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

class RegisterUser extends React.Component {
  render() {
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
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg")}
                      />
                    </a>
                    <Form className="mt-5">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>E-mail</label>
                            <Input
                              defaultValue="diegoceccon@email.com"
                              disabled
                              placeholder="e-mail"
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
                              defaultValue="Diguya"
                              disabled
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label htmlFor="inputNickName">Name</label>
                            <Input
                              defaultValue="Diego Ceccon de Souza"
                              placeholder="Nome"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <label>City</label>
                            <Input
                              defaultValue="Colombo"
                              placeholder="city"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <label>UF</label>
                            <Input
                              defaultValue="PARANÁ"
                              placeholder="UF"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <label>Country</label>
                            <Input
                              defaultValue="BRASIL"
                              placeholder="contry"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <div className="update ml-auto mr-auto">
                          <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
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
