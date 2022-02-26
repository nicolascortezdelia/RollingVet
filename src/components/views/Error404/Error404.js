import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./error404.css";

const Error404 = () => {
  return (
    <>
      <div className="text-center container my-5">
        <Image src="https://t3.ftcdn.net/jpg/02/61/08/76/360_F_261087622_8eRI0TAwDAyabS1b0Uifx1wKqHzA41r3.jpg" alt="Error404" className="img-responsive"></Image>
      </div>
      <span>
        <Link to="/" className="link my-3 text-center fw-bold fs-3 text-danger">Volver a RollingVet</Link>
      </span>
    </>
  );
};

export default Error404;
