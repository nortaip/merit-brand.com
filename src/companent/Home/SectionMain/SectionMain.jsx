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
              <h1 className={s.sectionMain__title}>The Reds</h1>

              <p className={s.sectionMain__text}>
                Made from grape Cabernet Sauvignon & Merlot which is cultivated
                in a region of Shabran. Wine is violet-red color with smooth
                fruit aroma with notes of black currant. Recommended to serve
                red meat, salads & cheese. Flow temperature 14°-16
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className={s.sectionMain}>
              <h1 className={s.sectionMain__title}>The Reds</h1>

              <p className={s.sectionMain__text}>
                The company Merit Brand LTD is engaged in the production of red,
                white, dry, semi-sweet, sweet wines, vodka, whiskey and cognac.
                Today, the range of products covers both the local market and
                the international one. The company exports wines to the Russian
                Federation and China.
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
