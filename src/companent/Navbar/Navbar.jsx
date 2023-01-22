import React from "react";
import s from "./Navbar.module.scss";
import img from "./../../img/header-logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <Button 
         onClick={handleShow}>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </Button>

        <Offcanvas show={show} onHide={handleClose} backdrop="static">
          <Offcanvas.Header closeButton className={s.Offcanvas_header}>
            <Offcanvas.Title>Merit-Brand</Offcanvas.Title>
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
                  About
                </Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Navbar;
