import React from "react";
import s from "./Main.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./../../../img/slider1.png";

function Main() {
  return (
    <>
    <div className={s.main}>
      <Container fluid  className={s.container}>
        <Row>
          <Col lg={12}>
            <div className={s.mainImg}>
              <img src={img} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}

export default Main;
