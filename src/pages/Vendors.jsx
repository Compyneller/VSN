import { Button, Card, Container } from "react-bootstrap";
const Vendors = () => {
  return (
    <Container
      className="containerPrivacy d-flex align-items-center"
      style={{ minHeight: " 60vh" }}
    >
      <Card className="contactUsCard shadow-sm">
        <Card.Header
          className="text-light"
          as="h3"
          style={{ background: "#1A237E" }}
        >
          Vendors
        </Card.Header>
        <Card.Body>
          <p>
            For collaboration, please mail us your exact Line of Business in
            detail and also mention the Use of Payment Gateway with pricing
            range on your website.
            <br />
            <br />
            For registration details, please send us your
            <ul>
              <li>Email ID</li>
              <li>Details of Directors / Partners / Owners</li>
              <li>PAN Card Details</li>
              <li>GST Certificate Details</li>
            </ul>
          </p>
          <p>
            Our strategy has helped a variety of partners grow and elevate their
            platforms. We could do the same for you.
          </p>
          <a href="https://forms.gle/xgdWMaLeZk8nT6yy9" target="_blank">
            <Button variant="dark">Join Us</Button>
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Vendors;
