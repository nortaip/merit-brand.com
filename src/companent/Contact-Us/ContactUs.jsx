import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import s from "./ContactUs.module.scss";
import img from "./../../img/34.png";
import img1 from "./../../img/345.png";
import ContactFooter from "./ContactFooter/ContactFooter";
import headerimg from "./../../img/ggg.png";
import { useTranslation } from "react-i18next";

function ContactUs() {

  const { t,i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={s.ContactUs}>
      <div className={s.contactusnone}>
        <img src={headerimg} alt="aa" className="img-fluid mb-5" />
      </div>
      <Container>
        <Row>
          <Col md="8" className="p-0 m-auto">
            <div className={s.ContactUsHeader}>
              <p className={s.brandtext}>{t("about")}</p>
              <h1>{t("started")}</h1>
              <p className="mt-5 mb-5">
{t("abouttext1")}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">
          <Col md="4" className="p-0">
            <div className={s.ContactUsLeft}>
              <img src={img} alt="img" />
            </div>
          </Col>
          <Col md="4" className="p-0">
            <div className={s.ContactUsRight}>
            <p className={s.brandtext}>{t("about")}</p>
            <h1>{t("started")}</h1>
              <p>
                {t("abouttext2")}
              </p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center ">
          <Col md="4" className="p-0">
            <div className={s.ContactUsRight}>
            <p className={s.brandtext}>{t("about")}</p>
              <h1>{t("abouttext4")}</h1>
              <p>
                {t("abouttext3")}
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
      <ContactFooter />
    </div>
  );
}

export default ContactUs;
