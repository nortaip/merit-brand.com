import React from "react";
import { Container } from "react-bootstrap";
import s from "./index.module.scss";

function Map() {
  return (
    <Container>
      <div className={s.Map}>
        <iframe
          title="map"
          width="100%"
          height="600"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Ziya%20Bunyadov%20ave.,%2043M&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </Container>
  );
}

export default Map;
