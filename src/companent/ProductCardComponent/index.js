import React from 'react'
import { Col } from 'react-bootstrap'
import s from './index.module.scss'
// import img from '../../img/1.jpg'

function ProductCardComponent({
    img ,
    title,
    price , 

}) {
  return (
    <Col md={4}>
        <div className={s.ProductCard}>
            <div className={s.ProductCardImg}>
                <img src={img}  alt="123456789"/>
            </div>
            <div className={s.ProductCardTitle}>{title}</div>
            <div className={s.ProductCardPrice}>$ {price}</div>
           
        </div>
    </Col>
  )
}

export default ProductCardComponent ; 