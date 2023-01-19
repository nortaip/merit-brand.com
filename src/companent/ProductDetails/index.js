import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import s from "./index.module.scss";

export default function ProductDetails() {
  const { state } = useLocation();
  const { barcode, brand, category, description, id, image, name, price } =
    state;

  return (
    <div className={s.Product}>
    <Container>
      <Row>
        <Col md={6}>
          <div className={s.ProductDetailsImg}>
            <img src={image} className="" alt="1234567890" />
          </div>
        </Col>
        <Col md={6}>
            <div className={s.ProductDetailsInfo}>
          <div className={s.ProductDetailsTitle}>{id}</div>
          <div className={s.ProductDetailsTitle}>{name}</div>
          <div className={s.ProductDetailsPrice}>$ {price}</div>
          <div className={s.ProductDetailsDescription}>{description}</div>
          <div className={s.ProductDetailsBarcode}>Barcode: {barcode}</div>
          <div className={s.ProductDetailsBrand}>Brand: {brand}</div>
          <div className={s.ProductDetailsCategory}>Category: {category}</div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
