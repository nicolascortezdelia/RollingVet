import React, {  useState } from "react";
import { Row, Col } from "react-bootstrap";

const Clima = () => {
  const [clima, setClima] = useState([]);
  const [icono, setIcono] = useState({});
  const [temperatura, setTemperatura] = useState("");

  window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d500a2c7d60e12d182ae94e55b3fcf60`;

        fetch(api)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setClima(data);
            setIcono(data.weather[0]);
            setTemperatura(Math.round(data.main.feels_like-273));
          });
      });
    }
  });

  return (
      <div className="bg-danger text-white">
         

      <Row className="m-0" >
     <Col className="text-center"   >
     <p className="text-white fw-bold mb-5 "> Ciudad: </p>
     
     <p className="mt-4" >{clima.name}</p>
     </Col> 
     <Col className="text-center"  >
         <p className="text-white fw-bold mb-5"> Temperatura: </p>
     
        <p className="mt-4" > {temperatura}ºC </p> 
         </Col>
        <Col className="text-center">
            
       <p className="text-white fw-bold"> {icono.main}</p> 
        <img
            src={`http://openweathermap.org/img/wn/${icono.icon}@2x.png`}
            alt="Clima"
            className="img-responsive"
          />
    
 
            
            </Col>
            
      

      </Row>
 
          
        

        
    </div>
  );
};

export default Clima;