import React from "react";
import { Col } from "react-bootstrap";
import s from "./index.module.scss";
import { useNavigate } from "react-router-dom";

function ProductCardComponent({ img, title, brand, data, name1 }) {
  const navigate = useNavigate();

  return (
    <Col md={3} className={s.colpadding}>
      <div
        className={s.ProductCard}
        onClick={() => navigate(`/ProductDetails`, { state: { ...data } })}
      >
        <div className={s.ProductCardImg}>
          <img src={img} alt="123456789" />
        </div>{" "}
        <div className={s.ProductCardPrice}> {brand}</div>
        <div className={s.ProductCardTitle}>{title}</div>
        <div className={s.ProductCardName1}>{name1}</div>
    
      </div>
    </Col>
  );
}

export default ProductCardComponent;
