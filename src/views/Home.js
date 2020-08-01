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
              <span class="body">
                With Shawime you can chat with people from all over the world
                without leaving your home. Here you can chat with people who
                have experience dealing with mental health issues and a number
                of other difficult problems.
              </span>
              <span class="title second">Even far away, we can connect</span>
              <span class="body">
                During these dark times the world is going through, we at
                shawime believe that by connecting people we can all together
                find the strength to surpass this challenge. Here you can enter
                chat rooms for specific problems that are affecting you.
              </span>
            </div>
            <div class="image"></div>
          </div>
        </div>
        <div class="about">
          <div class="content">
            <div class="left">
              <span class="title">We help people connect</span>
              <span class="body">
                With Shawime you can chat with people from all over the world
                without leaving your home. Here you can chat with people who
                have experience dealing with mental health issues and a number
                of other difficult problems.
              </span>
            </div>
            <div class="right">
              <span class="title">We help people connect</span>
              <span class="body">
                With Shawime you can chat with people from all over the world
                without leaving your home. Here you can chat with people who
                have experience dealing with mental health issues and a number
                of other difficult problems.
              </span>
            </div>
          </div>
        </div>
        <div class="describe">
          <div class="chat">
            <div class="content">
              <div class="box">
                <div class="info">
                  <span class="title">
                    Online chat rooms anytime you need !!!
                  </span>
                  <span class="body">
                    Enter any chat to talk about what you are feeling right now,
                    these rooms are created by "advisors", people who had
                    similar experiences and are ready to help others. Make
                    friends and learn with theirs examples.
                  </span>
                </div>
                <div class="image"></div>
              </div>
            </div>
          </div>
          <div class="hastag-groups">
            <div class="content">
              <div class="box">
                <div class="image"></div>
                <div class="info">
                  <span class="title">Direct hashtags and multiple groups</span>
                  <span class="body">
                    There is a hashtag for every subject, find the one you want
                    to partake in and chat away!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="admins">
            <div class="content">
              <div class="box">
                <div class="info">
                  <span class="title">
                    Administrators are people who always encourage us to
                    improve!
                  </span>
                  <span class="body">
                    Have you ever been through something that you would like to
                    share, and use that experience to encourage others to move
                    forward? enter Shawime, and help a lot of people by joining
                    as an advisor, granting you the tools to create chat rooms
                    to chat with other users and share your story.
                  </span>
                </div>
                <div class="image"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
