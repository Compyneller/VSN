import { Card, Container } from "react-bootstrap";
const Legal = () => {
  return (
    <Container className="containerPrivacy">
      <Card className="contactUsCard shadow-sm">
        <Card.Header
          className="text-light"
          as="h3"
          style={{ background: "#1A237E" }}
        >
          Legal
        </Card.Header>
        <Card.Body>
          <p>
            The legal name of the brand is ‘VSN SOLUTIONS’ registered in
            Jalandhar, Punjab. The GSTIN NO. is 03AAJFV5072C1ZE. VSN Sell
            Solutions owns and operates the website{" "}
            <a href="www.vsnsellsolutions.com">www.vsnsellsolutions.com</a>{" "}
            provides a marketplace and platform for consumers and organizations
            to sell or repair their used, old and other articles, and conduct
            varied transactions and activities.
            <br />
            <br />
            VSN Solution provides a solution where a customer can sell, or
            repair their used phone. We have a wide range of services available
            in which a user can also purchase a new phone screen, LCD screen,
            and a lot more services are coming soon.
            <br />
            <br />
            If you have any queries, feel free to contact us-
            <br />
            Email:{" "}
            <a href="mailto:sell@vsnsellsolutions.com">
              sell@vsnsellsolutions.com
            </a>
            <br />
            Address: 563, VSN Solutions, Cheema Nagar Extension Jalandhar,
            Punjab, 144001
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Legal;
