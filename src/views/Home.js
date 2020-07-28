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

class Login extends React.Component {
    render() {
        return (

            <>
                <div class="work">
                    <div class="content">
                        <div class="info">
                            <span class="title">We help people connect</span>
                            <span class="body">We built an application where people can tell their problems without leaving home. At shawime we can have access to people with experience in problems or illnesses that we have experienced throughout life.</span>
                            <span class="title second">Even far away we can connect</span>
                            <span class="body">During bleak and dark times, it is possible to find light. In shawime it is possible to enter into discussion groups for your specific problem, it is also possible to help other people.</span>
                        </div>
                        <div class="image"></div>
                    </div>
                </div>
                <div class="about">
                    <div class="content">
                        <div class="left">
                            <span class="title">We help people connect</span>
                            <span class="body">We built an application where people can tell their problems without leaving home. At shawime we can have access to people with experience in problems or illnesses that we have experienced throughout life.</span>
                        </div>
                        <div class="right">
                            <span class="title">We help people connect</span>
                            <span class="body">We built an application where people can tell their problems without leaving home. At shawime we can have access to people with experience in problems or illnesses that we have experienced throughout life.</span>
                        </div>
                    </div>
                </div>
                <div class="describe">
                    <div class="chat">
                        <div class="content">
                            <div class="box">
                                <div class="info">
                                    <span class="title">Online chat rooms anytime you need !!!</span>
                                    <span class="body">Enter the chat and talk about everything you are feeling, for a moment, don't be afraid, go in and talk to people who have been through what is happening, meet many others and make friends! Everyone within Shawime wants you to get better! There are several rooms created by people who are an example of overcoming.</span>
                                </div>
                                <div class="image">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hastag-groups">
                        <div class="content">
                            <div class="box">
                                <div class="image">
                                </div>
                                <div class="info">
                                    <span class="title">Direct hashtags and multiple groups for each</span>
                                    <span class="body">There is a hashtag for each subject, and within them are various rooms open to users. Come in, chat, make friends, look for solutions..</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="admins">
                        <div class="content">
                            <div class="box">
                                <div class="info">
                                    <span class="title">Administrators are people who always encourage us to improve!</span>
                                    <span class="body">Have you ever been through something that you would like to share and encourage to move forward? Join Shawime, and help a lot of people, you can join as an advisor, and create rooms to talk about your overcoming. come on !!!</span>
                                </div>
                                <div class="image">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Login;