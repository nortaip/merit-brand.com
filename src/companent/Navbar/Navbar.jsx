import React from "react";
import s from "./Navbar.module.scss";
import img from "./../../img/header-logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={s.navbar}>
        <div className={s.navbar__logo}>
          <img src={img} alt="logo" />
        </div>

        <div className={s.button_offanvas}>
          <Button
            className={s.button_offcanvas}
            variant="warning"
            onClick={handleShow}
          ></Button>
        </div>

        <Offcanvas
          className={s.offcanvas}
          show={show}
          onHide={handleClose}
          backdrop="static"
        >
          <Offcanvas.Header closeButton className={s.Offcanvas_header}>
            <Offcanvas.Title className={s.offcanvas_title}>
              Merit-Brand
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={s.Offcanvas_body}>
            <ul
              className={
                s.showMenu ? s.navbar__menu__active : s.navbar__menu__ul
              }
            >
              <li>
                <Link
                  onClick={() => {
                    setShow(false);
                  }}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setShow(false);
                  }}
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setShow(false);
                  }}
                  to="/contact"
                >
                  About us
                </Link>
              </li>
              <li>
                <span className={s.icongap}>
                  <a href="https://www.instagram.com/meritbrand2007/">
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>

                  <a href="https://www.facebook.com/meritbrand1/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </span>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Navbar;
