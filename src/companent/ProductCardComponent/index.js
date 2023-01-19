import React from "react";
import { Col } from "react-bootstrap";
import s from "./index.module.scss";
import { useNavigate } from "react-router-dom";

function ProductCardComponent({ img, title, price, data, id }) {
  const navigate = useNavigate();

  return (
    <Col md={4}>
      <div
        className={s.ProductCard}
        onClick={() => navigate(`/ProductDetails  ` , { state: { ...data } })}
      >
        <div className={s.ProductCardImg}>
          <img src={img} alt="123456789" />
        </div>
        <div className={s.ProductCardTitle}>{title}</div>
        <div className={s.ProductCardPrice}>$ {price}</div>
      </div>
    </Col>
  );
}

export default ProductCardComponent;
