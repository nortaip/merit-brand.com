import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import s from "./SectionMain.module.scss";
import img from "./../../../img/234.png";
import img1 from "./../../../img/2345.png";
import { useTranslation } from "react-i18next";


function SectionMain() {

  const { t } = useTranslation();
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };


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
            <p className={s.brandtext}>Merit-Brand</p>
              <h1  className={s.sectionMain__title}>{t(`lido`)}</h1>

              <p className={s.sectionMain__text}>
                {t(`lido1`)}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className={s.sectionMain}>
            <p className={s.brandtext}>Merit-Brand</p>
              <h1 className={s.sectionMain__title}>{t(`goldshabran`)}</h1>

              <p className={s.sectionMain__text}>
              {t(`goldshabran1`)}
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
