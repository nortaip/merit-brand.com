import React from "react";
import s from "./ContactFooter.module.scss";
import { Container, Row, Col } from "react-bootstrap";
  

function ContactFooter() {
  return (
    <div className={s.ContactFooter}>
      <Container>
        <Row className="text-center">
          <Col md={4} className="m-auto">
            <div className={s.ContactFooterCard}>
              <div className={s.ContactFooterCardBrand}>The State</div>
              <h2 className={s.ContactFooterCardTitle}>Contacts us</h2>
            </div>
            <Row>
              <Col md={6} className={s.ContactFooterLeft}>
                <h6>Adress</h6>
                {/* <p>Oficce</p> */}
                <p>Ziya Bunyadov ave,43M </p>
                <p>Baku,Azerbaijan AZ1108 </p>
                <p>Factory</p>
                <p>Uzun Boyat village </p>
                <p> Shabran Azerbaijan AZ1700</p>
              </Col>
              <Col md={6} className={s.ContactFooterRight}>
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

export default ContactFooter;
