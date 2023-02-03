import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import s from "./SectionTop.module.scss";
import img3 from "./../../../img/image3.png";
import img4 from "./../../../img/image4.png";
import { useTranslation } from "react-i18next";





function SectionTop() {


  const { t} = useTranslation();
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };



  return (
    <div className={s.SectionTop}>
      <Container>
    
        <Row className="d-flex justify-content-center mt-5">
          <Col md="4">
            <div className={s.SectionTopLeft}>
              <img src={img3} alt="img" />
            </div>
          </Col>
          <Col md="4">
            <div className={s.SectionTopRight}>
              <p className={s.brandtext}>Merit-Brand</p>
              <h1>Mirvari</h1>
              {/* <h1>{t(`brand`)}</h1> */}

       
              
              <p className={s.sectionMain__text}>
      {t(`mirvari1`)}
              </p>

            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-5">
          <Col md="4">
            <div className={s.SectionTopRight}>
            <p className={s.brandtext}>Merit-Brand</p>
              <h1 >{t(`aylingold`)}</h1>
              <p className={s.sectionMain__text}>
              {t(`aylingold1`)}
              </p>
            </div>
          </Col>
          <Col md="4">
            <div className={s.SectionTopLeft}>
              <img src={img4} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionTop;
