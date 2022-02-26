import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home/Home";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/views/ContactUs/ContactUs";
import Login from "./components/layout/Login";
import Error404 from "./components/views/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPlanes from "./components/views/PaginaPlanes/PaginaPlanes";
import AdminClientesCreate from "./components/views/AdminClientes/AdminClientesCreate";
import AdminTurnos from "./components/views/AdminTurnos/AdminTurnos";
import AdminTurnosCreate from "./components/views/AdminTurnos/AdminTurnosCreate";
import ListaTurnos from "./components/views/AdminTurnos/ListaTurnos/ListaTurnos";
import ListaClientes from "./components/views/AdminClientes/ListaClientes/ListaClientes";
import AdminClientes from "./components/views/AdminClientes/AdminClientes";
import { useEffect, useState } from "react";
import EditClientes from "./components/views/AdminClientes/ListaClientes/EditClientes";

function App() {
  const [cliente, setClientes] = useState([]);
  const URL = process.env.REACT_APP_CLIENTES;

  useEffect(()=>{getApi()}, []);

  const getApi = async ()=> {
    try {
      const res = await fetch(URL);
      const clienteApi = await res.json();
      setClientes(clienteApi);
    } catch (error) {
      console.log(error);
    }
  }
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
          <Route exact path="/admin/clientes" element={<AdminClientes clientes={cliente} />} />
          <Route exact path="/edit/clientes/:id" element={<EditClientes URL={URL}/>}/>
          <Route
            exact
            path="/admin/clientes/create"
            element={<AdminClientesCreate URL = {URL} getApi = {getApi} />}
          />
          <Route exact path="/lista/turnos" element={<ListaTurnos />} />
          <Route exact path="/admin/turnos" element={<AdminTurnos />} />
          <Route
            exact
            path="/admin/turnos/create"
            element={<AdminTurnosCreate />}
          />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
