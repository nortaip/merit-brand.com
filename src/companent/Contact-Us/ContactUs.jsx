import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import s from "./ContactUs.module.scss";
import img from "./../../img/34.png";
import img1 from "./../../img/345.png";
import ContactFooter from "./ContactFooter/ContactFooter";
import headerimg from "./../../img/ggg.png";

function ContactUs() {
  return (
    <div className={s.ContactUs}>
       <div><img src={headerimg} alt="aa"  className="img-fluid mb-5"/></div>
      <Container>
        <Row className="d-flex justify-content-center mt-5">
          <Col md="4" className="p-0">
            <div className={s.ContactUsLeft}>
              <img src={img} alt="img" />
            </div>
          </Col>
          <Col md="4" className="p-0">
            <div className={s.ContactUsRight}>
              <h1>WELCOME TO OUR STORE</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada, nisl eget ultricies tincidunt, nunc elit lacinia
                mauris, eget aliquam nunc justo vel mauris. Sed malesuada, nisl
                eget ultricies tincidunt, nunc elit lacinia mauris, eget aliquam
                nunc justo vel mauris.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center ">
          <Col md="4" className="p-0">
            <div className={s.ContactUsRight}>
              <h1>WELCOME TO OUR STORE</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada, nisl eget ultricies tincidunt, nunc elit lacinia
                mauris, eget aliquam nunc justo vel mauris. Sed malesuada, nisl
                eget ultricies tincidunt, nunc elit lacinia mauris, eget aliquam
                nunc justo vel mauris.
              </p>
            </div>
          </Col>
          <Col md="4" className="p-0">
            <div className={s.ContactUsLeft}>
              <img src={img1} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
      <ContactFooter/>
    </div>
   
    

  );
}

export default ContactUs;
