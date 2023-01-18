import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import s from "./SectionMain.module.scss";
import img from "./../../../img/234.png";
import img1 from "./../../../img/2345.png";

function SectionMain() {
  return (
    <div className="mt-5 mb-5">
    <Container fluid>
      <Row>
        <Col md={6}>
          <div className={s.sectionMain__img}>
            <img src={img} alt="img" />
          </div>
        </Col>
        <Col md={6}>
          <div className={s.sectionMain}>
            <h1 className={s.sectionMain__title}>
            The Reds
            </h1>

            <p className={s.sectionMain__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, nec
              ultricies nisl nisl vel nisl. Sed euismod, nisl vel tincidunt
              lacinia, nunc est ultricies nunc, nec ultricies nisl nisl vel
              nisl.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className={s.sectionMain}>
            <h1 className={s.sectionMain__title}>
            The Reds
            </h1>

            <p className={s.sectionMain__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, nec
              ultricies nisl nisl vel nisl. Sed euismod, nisl vel tincidunt
              lacinia, nunc est ultricies nunc, nec ultricies nisl nisl vel
              nisl.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className={s.sectionMain__img}>
            <img src={img1} alt="img" />
          </div>
        </Col>

      </Row>
    </Container>
    </div>
  );
}

export default SectionMain;
