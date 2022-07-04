import React from 'react'
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
import PlanPrimerosPasos from "./components/views/PaginaPlanes/PlanPrimerosPasos";

import PlanAdultos from "./components/views/PaginaPlanes/PlanAdultos";
import PlanMadurando from "./components/views/PaginaPlanes/PlanMadurando";
import TurnosCreate from "./components/views/TurnosCreate/TurnosCreate";
import TurnosEdit from "./components/views/TurnosEdit/TurnosEdit";
import TurnosTabla from "./components/views/TurnosTabla/TurnosTabla";
import EditClientes from "./components/views/AdminClientes/ListaClientes/EditClientes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Nosotros from "./components/Nosotros/Nosotros";
import AdminHomePage from "./components/views/AdminHomePage/AdminHomePage";
import config from 'react-reveal/globals';


function App() {
  const [turnos, setTurnos] = useState([]);
  const URL2 = process.env.REACT_APP_AP_TURNOS;

  const [cliente, setCliente] = useState([]);
  const URL = process.env.REACT_APP_CLIENTES;

  const [admin, setAdmin] = useState([])
  const URLadmin = process.env.REACT_APP_ADMIN;

  useEffect(() => {
    getAp();
    getApi();
    getAdmin();
  }, []);

  const getAp = async () => {
    try {
      const res = await fetch(URL2);

      const turnosAp = await res.json();
      setTurnos(turnosAp);
    } catch (error) {
      console.log(error);
    }
  };

 
  const getApi = async () => {
    try {
      const res = await fetch(URL);
      
      const clienteApi = await res.json();

      
      setCliente(clienteApi);
      console.log(clienteApi)
    } catch (error) {
      console.log(error);
    }
  };

  const getAdmin = async () => {
    try {
      const res = await fetch(URLadmin);

      const adminApi = await res.json();
      setAdmin(adminApi);
      console.log(adminApi)
      
    } catch (error) {
      console.log(error);
    }
  };

  config({ ssrFadeout: true });

  return (
    <BrowserRouter>
      <Navigation />

      <main>
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactos" element={<ContactUs />} />
          <Route exact path="/nosotros" element={<Nosotros/>} />
          <Route exact path="*" element={<Error404 />} />
          <Route exact path="/login" element={<Login admin = {admin}/>} />
          <Route exact path="/planes" element={<PaginaPlanes />} />
          <Route exact path="/adminhome" element={<AdminHomePage/>} />
          <Route
            exact
            path="/planes/primerospasos"
            element={<PlanPrimerosPasos />}
          />
          <Route exact path="/planes/madurando" element={<PlanMadurando />} />
          <Route exact path="/planes/adultos" element={<PlanAdultos />} />
          <Route exact path="/lista/clientes" element={<ListaClientes />} />
          <Route
            exact
            path="/admin/clientes"
            element={
              <AdminClientes cliente={cliente} URL={URL} getApi={getApi} />
            }
          />
          <Route
            exact
            path="/edit/clientes/:id"
            element={<EditClientes URL={URL} getApi={getApi} />}
          />
          <Route
            exact
            path="/admin/clientes/create"
            element={<AdminClientesCreate URL={URL} getApi={getApi} />}
          />
          <Route
            exact
            path="/Turnos/Create"
            element={<TurnosCreate URL2={URL2} getAp={getAp} />}
          />
          <Route
            exact
            path="/Turnos/Edit/:id"
            element={<TurnosEdit URL2={URL2} getAp={getAp} />}
          />
          <Route
            exact
            path="/Turnos/Tabla"
            element={<TurnosTabla turnos={turnos} URL2={URL2} getAp={getAp} />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
