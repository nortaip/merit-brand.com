import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Nav } from "react-bootstrap";
import { Col } from "react-bootstrap";
import s from "./Header.module.scss";
import logo from "./../../img/logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
library.add(faFacebook, faInstagram);

function HeaderS() {
  return (
    <Nav className={s.header}>
      <Container>
        <Row>
          <Col md="2">
            <div className="header-logo ">
              <img src={logo} alt="logo" />
            </div>
          </Col>

          <Col md="8">
            <ul className={s.headerCenter}>
              <li>
                <Link to={`home`}>HOME</Link>
              </li>
              <li> ABOUT US</li>
              <li>
                <Link to={`product`}>PRODUCT</Link>
              </li>
              <li>
                <Link to={`contact`}> CONTACT</Link>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <div className={s.headerRight}>
              <ul>
                <li>EN</li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
}

export default HeaderS;
