import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashtagService } from "../service/Hashtag.service";




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

/*const [hashtags, setHashtags] = useState([]);*/



class Dashboard extends React.Component {
    response;


    constructor() {
        super();
        this.hashtagService = new HashtagService();
        this.state = {
            hashtags: [],
        };

    }


    async getUser() {
        this.hashtagService.getHashtag().then((res) => {
            console.log(res);


            this.setState({ hashtags: res.data });
            console.log('stado hastag', this.state.hashtags);

        });
    };

    render() {
        const { hashtags } = this.state;
        this.getUser();

        return (
            <>
                <div className="content">
                    <div class="body-content">

                        {this.state.hashtags && this.state.hashtags.map(hashtag => (


                            <div class="card-item" id={hashtag._id}>
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
                                                        <p className="title">{hashtag.description}</p>
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
                        ))}
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