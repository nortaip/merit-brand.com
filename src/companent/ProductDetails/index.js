import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import s from "./index.module.scss";

export default function ProductDetails() {
  const { state } = useLocation();
  const { brand, image, name, name1, details,description} =
    state;

  return (
    <div className={s.Product}>
      <Container>
        <Row className="d-flex justify-content-center align-items-center" >
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
              <div className={s.ProductDetailsDescription}>{description}</div>
              <div className={s.ProductDetailsDetails}>{details}</div>
              

         
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
