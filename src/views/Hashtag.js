import React from 'react';
import { Link } from 'react-router-dom';
import { HashtagService } from "../service/Hashtag.service";




// reactstrap components
import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col,
} from "reactstrap";




class Hashtag extends React.Component {

    constructor() {
        super();
        this.hashtagService = new HashtagService();
        this.state = {
            hashtags: [],
        };

    }


    async getUser() {
        this.hashtagService.getHashtag().then((res) => {

            this.setState({ hashtags: res.data });
        });
    };


    componentDidMount() {
        this.getUser();
    };


    render() {

        return (
            <>
                <div className="content">
                    <div className="body-content">

                        {this.state.hashtags && this.state.hashtags.map(hashtag => (


                            <div key={hashtag._id} className="card-item" id={hashtag._id}>
                                <Link to={'/admin/groups/hashtag/' + hashtag._id}>
                                    <Card className="card-stats">
                                        <CardBody>
                                            <Row>
                                                <Col md="2" xs="3">
                                                    <div className="icon-big text-center icon-warning">
                                                        <div className="content-icon-hastag">
                                                            <i className="fa fa-hashtag" aria-hidden="true"></i>
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
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Hashtag;