import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import s from "./SectionTop.module.scss";
import img from "./../../../img/1.jpg";

function SectionTop() {
  return (
    <div className={s.SectionTop}>
      <Container>
      <Row className="d-flex justify-content-center mt-5">
          <Col md="4">
            <div className={s.SectionTopLeft}>
              <img src={img} alt="img" />
            </div>
          </Col>
          <Col md="4">
            <div className={s.SectionTopRight}>
              <h1>WELCOME TO OUR STORE</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada, nisl eget ultricies tincidunt, nunc elit lacinia
                mauris, eget aliquam nunc justo vel mauris. Sed malesuada, nisl
                eget ultricies tincidunt, nunc elit lacinia mauris, eget aliquam
                nunc justo vel mauris.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-5">
        <Col md="4">
            <div className={s.SectionTopRight}>
              <h1>WELCOME TO OUR STORE</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada, nisl eget ultricies tincidunt, nunc elit lacinia
                mauris, eget aliquam nunc justo vel mauris. Sed malesuada, nisl
                eget ultricies tincidunt, nunc elit lacinia mauris, eget aliquam
                nunc justo vel mauris.
              </p>
            </div>
          </Col>
          <Col md="4">
            <div className={s.SectionTopLeft}>
              <img src={img} alt="img" />
            </div>
          </Col>
       
        </Row>

      </Container>
    </div>
  );
}

export default SectionTop;
