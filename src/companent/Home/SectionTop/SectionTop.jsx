import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import s from "./SectionTop.module.scss";
import img from "./../../../img/1.jpg";
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
              <img src={img} alt="img" />
            </div>
          </Col>
          <Col md="4">
            <div className={s.SectionTopRight}>
              <p className={s.brandtext}>Merid-Brand</p>
              {/* <h1>Mirvari</h1> */}
              <h1>{t(`brand`)}</h1>

       
              
              <p>
                Made from grape Cabernet Sauvignon & Merlot which is cultivated
                in a region of Shabran. Wine is violet-red color with smooth
                fruit aroma with notes of black currant. Recommended to serve
                red meat, salads & cheese. Flow temperature 14°-16°
              </p>
              <p>
                Made from grape Madrasa which is cultivated in a region of
                Shabran. Wine is light-red color with smooth cherry aroma.
                Recommended to serve beef and lambats. Flow temperature 14°-16°
              </p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-5">
          <Col md="4">
            <div className={s.SectionTopRight}>
            <p className={s.brandtext}>Merid-Brand</p>
              <h1>{t(`aylingold`)}</h1>
              <p>
              {t(`aylingold1`)}
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
