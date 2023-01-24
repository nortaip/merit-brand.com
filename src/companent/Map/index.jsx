import React from "react";
import { Container } from "react-bootstrap";
import s from "./index.module.scss";


function Map() {
  return (
    <Container>
      <div className={s.Map}>
        <h1>Map</h1>
       <iframe width="100%" height="1000" id="gmap_canvas" src="https://maps.google.com/maps?q=Ziya%20Bunyadov%20ave.,%2043M&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      
      </div>
    </Container>
  );
}

export default Map;
