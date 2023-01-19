import React from "react";
import s from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className={s.Footer}>
      <Container>
        <Row className="text-center">
          <Col md={4} className="m-auto">
            <div className={s.FooterCard}>
              <div className={s.FooterCardBrand}>About Us</div>
              <h2 className={s.FooterCardTitle}>Lorem ipsum dolor</h2>
            </div>
       <Row>
       <Col md={6} className="text-center">
              <h6>Adress</h6>
              <p>Oficce</p>
              <p>Office Ziya Bunyadov ave., 43M Baku,</p>
              <p>Azerbaijan AZ1108 Factory</p>
              <p>Uzun Boyat village Shabran</p>
              <p>Azerbaijan AZ1700</p>
              <p></p>
              
            </Col>
            <Col md={6} className="text-center">
              <h6>Contact</h6>
              <p>+994 51 391-3434</p>
              <p>+994 12 561-9661</p>
              <p>Email : office@merit-brand.com</p>
            </Col>
       </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
