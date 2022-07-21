import React from "react";
import { Card, Container } from "react-bootstrap";

const HowVsnWork = () => {
  return (
    <Container className="containerPrivacy">
      <Card className="contactUsCard shadow-sm">
        <Card.Header
          className="text-light"
          as="h3"
          style={{ background: "#1A237E" }}
        >
          VSN Solutions- How it works
        </Card.Header>
        <Card.Body>
          <p>
            After visiting the VSN Solutions website: www.vsnsellsolutions.com
          </p>
          Steps :-
          <ol>
            <br />
            <img
              src="https://miro.medium.com/max/1400/0*onmohB1dVNLidI6I"
              alt=""
              className="w-50"
            />
            <br />
            <br />
            <li>
              Please click on signup on the top right corner of the home page.
            </li>
            <li>
              Please enter your mobile number. Now, you will receive an OTP.
              Enter the correct OTP as the next step & click on submit.
            </li>
            <br />

            <img
              src="https://miro.medium.com/max/1400/0*pUi-DSJBXXaoCjOz"
              className="w-50"
              alt=""
            />
            <br />
            <br />
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
            <li>Now select the product category you want to buy & sell.</li>
            <li>
              Write us an email describing each and every detail of your
              product.
            </li>
          </ol>
          <h5>
            Note: Please mention the complete information of your product. Year
            of manufacturing, year of purchase, Model name, Model number, and
            condition of the product.
          </h5>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HowVsnWork;
