import React from "react";
import { Container, Row } from "react-bootstrap";
import s from "./Products.module.scss";
// import img from "./../../img/1.jpg";
import ProductCardComponent from "../ProductCardComponent";
import products from "../../data/productsData.js";

function Products() {
  return (
    <div className={s.Products}>
      <Container>
        <Row>
          {products.map((product, index) => 
          {
          return (
            <ProductCardComponent
              key={index}
              img={product.image}
              title={product.name}
              price={product.price}
            />
          )})}

          {/* <Col md={4}>
            <div className={s.ProductCard}>
              <div className={s.ProductCardImg}>
                <img src={img}  alt="123456789"/>
              </div>
              <div className={s.ProductCardTitle}>Product Title</div>
              <div className={s.ProductCardPrice}>$ 100</div>

            </div>
          </Col>
          <Col md={4}>
            <div className={s.ProductCard}>
              <div className={s.ProductCardImg}>
                <img src={img}  alt="123456789"/>
              </div>
              <div className={s.ProductCardTitle}>Product Title</div>
              <div className={s.ProductCardPrice}>$ 100</div>

            </div>
          </Col>
          <Col md={4}>
            <div className={s.ProductCard}>
              <div className={s.ProductCardImg}>
                <img src={img}  alt="123456789"/>
              </div>
              <div className={s.ProductCardTitle}>Product Title</div>
              <div className={s.ProductCardPrice}>$ 100</div>

            </div>
          </Col> */}


        </Row>
      </Container>
    </div>
  );
}

export default Products;
