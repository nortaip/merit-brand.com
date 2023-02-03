import React from "react";
import { Container, Row } from "react-bootstrap";
import s from "./Products.module.scss";
import ProductCardComponent from "../ProductCardComponent";
import headerimg from "./../../img/qwerty.png";
import data from "../../data/productsData.js";

function Products() {
  const [products, setProducts] = React.useState(data);

  const filterProducts = (categoryItem) => {
    const result = data.filter((currentCategory) => {
      return currentCategory.category === categoryItem;
    });
    setProducts(result);
  };


  return (
    <div className={s.Products}>
      <div className={s.Productsnone}>
        <img src={headerimg} alt="aa" className="img-fluid mb-5" />
      </div>
      <Container>
        <Row>
          <div className={s.Products__filter}>
            <button onClick={() => setProducts(data)}>All</button>
            <button onClick={() => filterProducts("Vodka")}>Vodka</button>
            <button onClick={() => filterProducts("Wine")}>Wine</button>
            <button onClick={() => filterProducts("Сognac")}>Сognac</button>
            <button onClick={() => filterProducts("Rum")}>Rum</button>
          </div>
        </Row>
        <Row>
          {products.map((product, index) => {
            return (
              <ProductCardComponent
                key={index}
                data={product}
                img={product.image}
                title={product.name}
                id={product.id}
                brand={product.brand}
                name1={product.name1}
                category={product.category}
                details={product.details}
                text={product.text}
                text1={product.text1}
                text2={product.text2}
                text3={product.text3}

              // details={details.description}

              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
