import React from "react";
import { Card, Container } from "react-bootstrap";

const OnlineReg = () => {
  return (
    <Container className="containerPrivacy">
      <Card className="contactUsCard shadow-sm">
        <Card.Header
          className="text-light"
          as="h3"
          style={{ background: "#1A237E" }}
        >
          Online registration-VSN Solutions
        </Card.Header>
        <Card.Body>
          <h5>For online registration, you have to follow the given steps-</h5>
          Steps :-
          <ol>
            <li>
              Please click on signup on the top right corner of the home page.
            </li>
            <li>
              Please enter your mobile number. Now, you will receive an OTP.
              Enter the correct OTP as the next step & click on submit.
            </li>

            <li>
              After submitting the OTP, please enter your username and email
              address.
            </li>
            <li> Now, create a password and then confirm it again.</li>
            <li>
              {" "}
              On the next screen, please enter the details of your Aadhar card
              and Pan card.
            </li>
            <li>
              Now, upload the front & back side of the Aadhar and Pan card and
              click on Submit. That’s it. Now you have successfully logged in to
              VSN Solutions!
            </li>
          </ol>
          <h5>The Pricing Structure- VSN Solutions</h5>
          <p>
            The pricing range for the gadget is set between Rs.7000–1,20,000.
            Our AI team will analyze the product based on the brand of the
            gadget, year of use, screen condition, and battery life. After
            carefully evaluating certain parameters, the team members will show
            you the final price of your gadget.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OnlineReg;
