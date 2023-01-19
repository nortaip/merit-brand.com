import React from "react";
import { Container, Row } from "react-bootstrap";
import s from "./Products.module.scss";
import ProductCardComponent from "../ProductCardComponent";
import products from "../../data/productsData.js";

function Products() {
  return (
    <div className={s.Products}>
      <Container>
        <Row>
          {products.map((product, index) => {
            console.log("product", product);
            return (
              <ProductCardComponent
                key={index}
                data={product}
                img={product.image}
                title={product.name}
                price={product.price}
                id={product.id}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
