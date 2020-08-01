import React from 'react';
import { Link } from 'react-router-dom';
import { groupService } from "../service/Group.service";




// reactstrap components
import {
    Card,
    CardBody,
    CardFooter,
    Row,
    Col,
} from "reactstrap";

/*const [hashtags, setHashtags] = useState([]);*/



class Chat extends React.Component {


    // constructor() {
    //     super();
    //     this.hashtagService = new HashtagService();
    //     this.state = {
    //         hashtags: [],
    //     };

    // }


    // async getRoom() {

    //     const room_id = this.props.match.params.hash;

    //     if (room_id) {

    //         this.groupService.getRoom(room_id).then((res) => {
    //             console.log(res);


    //             this.setState({ room: res.data });
    //             console.log('stado hastag', this.state.hashtags);

    //         });
    //     }
    // };



    // componentDidMount() {
    //     console.log('component did mount');
    //     this.getRoom();


    // };

    render() {
        // const { hashtags } = this.state;
        // this.getUser();


        return (
            <>
                <div className="content">
                    <Card className="card-stats card-chat">
                        <CardBody>
                            <div className="content-card">
                                <div className="header">
                                    <div className="image"></div>
                                    <button className="btn-chat" >Leave Room</button>
                                </div>
                                <div className="body">

                                    <div className="aside">
                                        <div className="room-name"></div>
                                        <div className="users">
                                            <div className="title"></div>
                                            <ul>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="messages">
                                        <div className="message">
                                            <div className="info-user">
                                                <span className="name"></span>
                                                <span className="time"></span>
                                            </div>
                                            <div className="content"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="footer">
                                    <input name="search" placeholder="Enter message" />
                                    <button className="btn-chat" >Send</button>
                                </div>



                            </div>
                        </CardBody>
                    </Card>
                </div>
            </>
        );
    }
}

export default Chat;