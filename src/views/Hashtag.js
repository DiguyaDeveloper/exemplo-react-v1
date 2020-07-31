import React from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
} from "reactstrap";


class Dashboard extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <div class="body-content">
                        <div class="card-item">
                            <a href="">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col md="2" xs="3">
                                                <div className="icon-big text-center icon-warning">
                                                    <div className="content-icon-hastag">
                                                        <i class="fa fa-hashtag" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="10" xs="7">
                                                <div className="info">
                                                    <p className="title">Ansiedade</p>
                                                    <div>
                                                        <p className="descript">A ansiedade pode ser normal e é um indicador de doença subjacente somente quando os sentimentos se tornam excessivos, obsessivos e interferirem na vida cotidiana.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <span>10</span> grupos
                                        </div>
                                    </CardFooter>
                                </Card>
                            </a>
                        </div>
                        <div class="card-item">
                            <a href="">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col md="2" xs="3">
                                                <div className="icon-big text-center icon-warning">
                                                    <div className="content-icon-hastag">
                                                        <i class="fa fa-hashtag" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="10" xs="7">
                                                <div className="info">
                                                    <p className="title">Ansiedade</p>
                                                    <div>
                                                        <p className="descript">A ansiedade pode ser normal e é um indicador de doença subjacente somente quando os sentimentos se tornam excessivos, obsessivos e interferirem na vida cotidiana.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <span>10</span> grupos
                                        </div>
                                    </CardFooter>
                                </Card>
                            </a>
                        </div>
                        <div class="card-item">
                            <a href="">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col md="2" xs="3">
                                                <div className="icon-big text-center icon-warning">
                                                    <div className="content-icon-hastag">
                                                        <i class="fa fa-hashtag" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="10" xs="7">
                                                <div className="info">
                                                    <p className="title">Ansiedade</p>
                                                    <div>
                                                        <p className="descript">A ansiedade pode ser normal e é um indicador de doença subjacente somente quando os sentimentos se tornam excessivos, obsessivos e interferirem na vida cotidiana.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <span>10</span> grupos
                                        </div>
                                    </CardFooter>
                                </Card>
                            </a>
                        </div>
                        <div class="card-item">
                            <a href="">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col md="2" xs="3">
                                                <div className="icon-big text-center icon-warning">
                                                    <div className="content-icon-hastag">
                                                        <i class="fa fa-hashtag" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="10" xs="7">
                                                <div className="info">
                                                    <p className="title">Ansiedade</p>
                                                    <div>
                                                        <p className="descript">A ansiedade pode ser normal e é um indicador de doença subjacente somente quando os sentimentos se tornam excessivos, obsessivos e interferirem na vida cotidiana.</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <span>10</span> grupos
                                        </div>
                                    </CardFooter>
                                </Card>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;