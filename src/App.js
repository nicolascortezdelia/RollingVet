import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home/Home";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/views/ContactUs/ContactUs"
import Login from "./components/layout/Login";

import Error404 from "./components/views/Error404/Error404";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PaginaPlanes from "./components/views/PaginaPlanes/PaginaPlanes";




function App() {
  return (
    
      <BrowserRouter>
      <Navigation />
      
      <main>
       <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/contactos" element={<ContactUs />}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/planes" element={<PaginaPlanes/>}/>
      
      <Route exact path="*" element={<Error404/>}/>
      {/*
      <Route exact path="/nosotros" element={Nosotros/>}/>
      <Route exact path="/product/create" element={<ProductCreate/>}/>
      <Route exact path="/product/edit" element={<ProductEdit/>}/>
      <Route exact path="/turnos" element={<Turnos/>}/>
      */}
      </Routes> 
      
      
      </main>
      <Footer />
      </BrowserRouter>

  );
}

export default App;
