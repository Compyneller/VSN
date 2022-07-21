import { Card, Container } from "react-bootstrap";

const RefundPolicy = () => {
  return (
    <Container className="containerPrivacy">
      <Card className="contactUsCard shadow-sm">
        <Card.Header
          className="text-light"
          as="h3"
          style={{ background: "#1A237E" }}
        >
          Refund & Cancellation Policy:
        </Card.Header>
        <Card.Body>
          <p style={{ fontWeight: "bold" }}>
            ● VSN Solution Repair offers a refund within 2 days of the service.{" "}
            <br />● We offer the option of cancellation, within 24 hours of
            placing an order.
          </p>
          <h5>Refund Policy-</h5>
          <p>You can claim your refund for the Screen replaced with us:</p>
          <ol>
            <li>
              We provide a 6 months warranty with a refund on every screen
              replacement under the following conditions –
              <ul>
                <li>
                  Screen/LCD that malfunction, or does not work as designed or
                  intended.
                </li>
                <li>
                  {" "}
                  ○ ANY display issues that may arise without any manual
                  intervention and are related to the screen quality
                  specifically dead pixels and touch issues.
                </li>
              </ul>
            </li>
            <li>
              If the screen replaced by us causes any above-mentioned issues,
              you can claim a brand new screen with the continued warranty of 6
              months! or get a refund of your screen within 2 days of service
              date by returning our screen back. All you need to do is:
              <ul>
                <li>
                  Share the video of the phone with the prevailing display issue
                  on the{" "}
                  <a href="mailto:sell@vsnsellsolutions.com">
                    sell@vsnsellsolutions.com
                  </a>
                </li>
                <li>
                  {" "}
                  Send us your phone number/order number/IMEI Number. Just about
                  any of it on the{" "}
                  <a href="mailto:sell@vsnsellsolutions.com">
                    sell@vsnsellsolutions.com
                  </a>
                </li>
                <li>
                  Our Customer Service Associate will respond to you within a
                  few hours and schedule our technician visit to replace your
                  screen!
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Warranty & Refund is limited to the parts and/or service(s) that
            were paid for. If only parts were purchased, warranty & refund is
            limited to the replacement of the parts. If parts and repair service
            were purchased, warranty extends to cover the labor cost of part
            replacement and any other repairs specifically resulting from the
            initial repair.
          </p>
          <p style={{ fontWeight: "bold" }}>
            Note: Refund is applicable only on Service prices and slot charges
            are applicable only if an order is completed.{" "}
          </p>

          <h5>Cancellation Policy-</h5>
          <p>
            The Order cancellation is not available after 24 hours of placing an
            order. We offer the option of cancellation, within 24 hours of
            placing an order. Also, we might impose 2% charges on the
            cancellation of accessories.{" "}
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RefundPolicy;
