import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import s from "./Footer.module.scss";

function Footer() {
  return (
    <div className={s.Footer}>
      <Container>
        <Row>
          <Col md={6} className="m-auto">
            <div className={s.FooterLeft}>
              <p className={s.brandText} >MERIT BRAND</p>
              <h1>We make good wines</h1>
              <p>
              © 2021 VILLENOIR. All rights reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
