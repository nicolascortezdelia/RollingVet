import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <>
      <div className="text-center img-responsive my-5">
        <Image src="error404.jpg" alt="Error404" width={1000}></Image>
      </div>
      <span>
        <Link to="/" className="link my-3 text-center fw-bold fs-3">Volver a Rolling Code</Link>
      </span>
    </>
  );
};

export default Error404;
