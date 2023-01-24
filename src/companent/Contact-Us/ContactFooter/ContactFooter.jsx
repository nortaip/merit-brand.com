import React from "react";
import s from "./ContactFooter.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
  

function ContactFooter() {
  const { t } = useTranslation();

  return (
    <div className={s.ContactFooter}>
      <Container>
        <Row className="text-center">
          <Col md={4} className="m-auto">
            <div className={s.ContactFooterCard}>
              {/* <div className={s.ContactFooterCardBrand}>The State</div> */}
              <h2 className={s.ContactFooterCardTitle}>{t("contacts-us")}</h2>
            </div>
            <Row>
              <Col md={6} className={s.ContactFooterLeft}>
         
                {/* <p>Oficce</p> */}
                {/* <p>Ziya Bunyadov ave,43M </p>
                <p>Baku,Azerbaijan AZ1108 </p> */}
                <h6>{t("adress")}</h6>
                <p>Uzun Boyat village </p>
                <p> Shabran Azerbaijan AZ1700</p>
              </Col>
              <Col md={6} className={s.ContactFooterRight}>
                <h6>{t("contacts-us")}</h6>
                {/* <p>+994 51 391-3434</p> */}
                <p>+994 12 561-9661</p>
                <p>Email : office@merit-brand.com</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactFooter;
