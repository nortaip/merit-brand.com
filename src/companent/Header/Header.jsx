import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Nav } from "react-bootstrap";
import { Col } from "react-bootstrap";
import s from "./Header.module.scss";
import logo from "./../../img/header-logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

library.add(faFacebook, faInstagram);

function HeaderS() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <Nav className={s.header}>
      <Container>
        <Row className="p-0 m-0">
          <Col md="2" className="p-0">
            <div className={s.headerLogo}>
              <img src={logo} alt="logo" />
            </div>
          </Col>

          <Col md="8">
            <ul className={s.headerCenter}>
              <li>
                <NavLink
                  to={`home`}
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  {(t`homepage`)}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`products`}
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                          {(t`products`)}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`about-us`}
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  {" "}
                  {(t`about`)}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`contacts`}
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  {" "}
                  {(t`contact`)}
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <div className={s.headerRight}>
              <ul>
    
                <button onClick={() => changeLanguage("en")}>en</button>
                <button onClick={() => changeLanguage("az")}>az</button>
                <button onClick={() => changeLanguage("ru")}>ru</button>

                <li>
                  <a href="https://www.instagram.com/meritbrand2007/">
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/meritbrand1/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
}

export default HeaderS;
