import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home/Home";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/views/ContactUs/ContactUs";
import Login from "./components/layout/Login";
import Error404 from "./components/views/Error404/Error404";
import PaginaPlanes from "./components/views/PaginaPlanes/PaginaPlanes";
import AdminClientesCreate from "./components/views/AdminClientes/AdminClientesCreate";
import ListaClientes from "./components/views/AdminClientes/ListaClientes/ListaClientes";
import AdminClientes from "./components/views/AdminClientes/AdminClientes";
import TurnosCreate from "./components/views/TurnosCreate/TurnosCreate";
import TurnosEdit from "./components/views/TurnosEdit/TurnosEdit";
import TurnosTabla from "./components/views/TurnosTabla/TurnosTabla";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactos" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/planes" element={<PaginaPlanes />} />
          <Route exact path="/lista/clientes" element={<ListaClientes />} />
          <Route exact path="/admin/clientes" element={<AdminClientes />} />
          <Route
            exact
            path="/admin/clientes/create"
            element={<AdminClientesCreate />}
          />
          <Route exact path="/Turnos/Create" element={ <TurnosCreate /> } />
          <Route exact path="/Turnos/Edit" element={ <TurnosEdit /> } />
          <Route exact path="/turnos/tabla" element={ <TurnosTabla /> } />
          <Route exact path="*" elment={ <Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
