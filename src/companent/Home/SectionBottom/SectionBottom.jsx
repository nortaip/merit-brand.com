import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import s from "./SectionBottom.module.scss";
import img from "./../../../img/34.png";
import img1 from "./../../../img/345.png";

function SectionBottom() {
  return (
    <div className={s.SectionBottom}>
      <Container>
      <Row className="d-flex justify-content-center mt-5">
          <Col md="4" className="p-0">
            <div className={s.SectionBottomLeft}>
              <img src={img} alt="img" />
            </div>
          </Col>
          <Col md="4" className="p-0">
            <div className={s.SectionBottomRight}>
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

        <Row className="d-flex justify-content-center ">
        <Col md="4" className="p-0">
            <div className={s.SectionBottomRight}>
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
          <Col md="4" className="p-0">
            <div className={s.SectionBottomLeft}>
              <img src={img1} alt="img" />
            </div>
          </Col>
       
        </Row>

      </Container>
    </div>
  );
}

export default SectionBottom;
