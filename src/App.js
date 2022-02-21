import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home/Home";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
<<<<<<< HEAD
import ContactUs from "./components/views/ContactUs/ContactUs"
import Login from "./components/layout/Login";

=======
// import ProductsTable from "./components/views/ProductTable/ProductTable";
// import ProductCreate from "./components/views/ProductCreate/ProductCreate";
// import ProductEdit from "./components/views/ProductEdit/ProductEdit";
>>>>>>> froms
import Error404 from "./components/views/Error404/Error404";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
<<<<<<< HEAD
import PaginaPlanes from "./components/views/PaginaPlanes/PaginaPlanes";

=======
import ContactUs from "./components/views/ContactUs/ContactUs";
import AdminClientesCreate from "./components/views/AdminClientes/AdminClientesCreate";
import AdminTurnos from "./components/views/AdminTurnos/AdminTurnos";
import AdminTurnosCreate from "./components/views/AdminTurnos/AdminTurnosCreate";
import ListaTurnos from "./components/views/AdminTurnos/ListaTurnos/ListaTurnos";
import ListaClientes from "./components/views/AdminClientes/ListaClientes/ListaClientes";
import AdminClientes from "./components/views/AdminClientes/AdminClientes";
>>>>>>> froms



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
<<<<<<< HEAD
      <Route exact path="/turnos" element={<Turnos/>}/>
      */}
      </Routes> 
      
      
=======
      <Route exact path="*" element={<Error404/>}/>
      </Routes> */}
      {/* <ContactUs /> */}
      {/* <AdminClientesCreate /> */}
      {/* <AdminTurnos /> */}
      {/* <AdminTurnosCreate /> */}
      <AdminClientes />
>>>>>>> froms
      </main>
      <Footer />
      </BrowserRouter>

  );
}

export default App;
