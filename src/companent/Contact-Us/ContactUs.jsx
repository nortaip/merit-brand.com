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
      <div className={s.contactusnone}>
        <img src={headerimg} alt="aa" className="img-fluid mb-5" />
      </div>
      <Container>
        <Row>
          <Col md="8" className="p-0 m-auto">
            <div className={s.ContactUsHeader}>
              <p className={s.brandtext}>About us</p>
              <h1>How we Started</h1>
              <p className="mt-5 mb-5">
                “Merit Brand” MMC - ən son avadanlıq növləri ilə təchiz olunmuş
                müasir istehsalat müəssisəsidir. İngilis dilindən tərcümədə,
                "Merit" sözü "ləyaqət", "üstünlük", "keyfiyyət" deməkdir.
                Verilmiş ad, müəssisənin mahiyyətini, onun istehsalat
                qabiliyyətini, gücünü və yeniliklərdən istifadə etmək
                qabiliyyətindən ibarət olan xüsusiyyətləri tam əks etdirir.
                “Merit Brand” zavodu, 2007-ci ildə Azərbaycan Respublikasının
                Şabran qəsəbəsi, Böyük Qafqaz dağlarının ətəyində və Xəzər
                dənizinin sahilində yerləşən Uzun Boyat kəndinin ərazisində
                yaradılıb. Onun məskunlaşdığı yer təsadüfi seçilməmişdi çunki
                təbiət bu bölgəyə şərabçılıq ilə məşğul olmaq üçün məhsuldar
                torpaq və çox əlverişli iqlim şəraiti kimi tohvələr bəxş
                etmişdi.
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
            <p className={s.brandtext}>About us</p>
              <h1>How we Started</h1>
              <p>
                “Merit Brand” zavodu, 2007-ci ildə Azərbaycan Respublikasının
                Şabran qəsəbəsi, Böyük Qafqaz dağlarının ətəyində və Xəzər
                dənizinin sahilində yerləşən Uzun Boyat kəndinin ərazisində
                aradılıb. Onun məskunlaşdığı yer təsadüfi seçilməmişdi çunki
                təbiət bu bölgəyə şərabçılıq ilə məşğul olmaq üçün məhsuldar
                torpaq və çox əlverişli iqlim şəraiti kimi tohvələr bəxş
                etmişdi.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center ">
          <Col md="4" className="p-0">
            <div className={s.ContactUsRight}>
            <p className={s.brandtext}>About us</p>
              <h1>Passion & Craftmanship</h1>
              <p>
                Bizim zavodumuz həmçinin araq istehsalı ilə də məşğul olur. Bu
                məqsədlə, zavod ərazisində bu günə texnoloji cəhətdən ən
                qabaqcıl avadanlıq ilə təchiz olunmuş xüsusi bina ayrılmışdır.
                Ukrayna və Kabardino-Balkariyadan dəvət olunmuş geniş təcrübəyə
                malik olan mütəxəssislər burada gedən bütün istehsalat
                proseslərinə nəzarət yetirirlər. Reseptlərin əsasını yalnız
                təbii mənşəli olan xammal təşkil edir. İstehsalda istifadə
                edilən dağlıq mənbələrinin suları unikal və faydalı
                xüsusiyyətlərə malikdir. Filtrasiya prosesi demək olar ki, araq
                istehsalının hər bir mərhələsində istifadə edildiyi üçün, burada
                ən əsas sayıla bilər
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
