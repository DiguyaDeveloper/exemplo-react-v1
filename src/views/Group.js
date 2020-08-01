import React, { useEffect, useState } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { GroupService } from "../service/Group.service";
import * as qs from 'query-string';




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



class Group extends React.Component {
    response;


    constructor() {
        super();
        this.groupService = new GroupService();
        this.state = {
            groups: [],
        };

    }

    async getGroup() {

        // console.log('propossssssss                   ', this.props.match);


        const hashtag_id = this.props.match.params.hash;

        if (hashtag_id) {

            this.groupService.getGroup(hashtag_id).then((res) => {
                console.log(res);


                this.setState({ groups: res.data });
                console.log('estado grupo', this.state.groups);

            });

        }
    };

    componentDidMount() {
        console.log('component did mount');
        this.getGroup();


    };


    render() {
        const { groups } = this.state;


        return (
            <>
                <div className="content">
                    <div class="body-content">
                        {this.state.groups && this.state.groups.map(group => (

                            <Link key={group._id} to={'/admin/chat/room/?id=' + group._id}>
                                <div class="card-item" >
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
                                                        <p className="title">{group.title}</p>
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
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Group);