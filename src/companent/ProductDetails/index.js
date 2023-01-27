import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import s from "./index.module.scss";
// import { useTranslation } from "react-i18next";

export default function ProductDetails() {
  const { state } = useLocation();
  const { brand, image, name, name1,  description,text,text1,text2,text3,text4 } = state;

  // const { t } = useTranslation();

  return (
    <div className={s.Product}>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4}>
            <div className={s.ProductDetailsImg}>
              <img src={image} alt="1234567890" />
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className={s.ProductDetailsInfo}>
              <div className={s.ProductDetailsBrand}> {brand}</div>
              <div className={s.ProductDetailsTitle}>{name}</div>
              <div className={s.ProductDetailsName1}>{name1}</div>
              <br/>
              <br/>

              <div className={s.ProductDetailsDescription}>{description}</div>
              {/* <div className={s.ProductDetailsDetails}>{t(`details`)}</div> */}
              <div>{text}</div>
              <br/>
              <div>{text1}</div>
              <br/>
              <div>{text2}</div>
              <br/>
              <div>{text3}</div>
              <br/>
              <div>{text4}</div>
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
