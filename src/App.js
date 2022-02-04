import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ProductsTable from "./components/views/ProductsTable/ProductsTable";
import ProductCreate from "./components/views/ProductCreate/ProductCreate";
import ProductEdit from "./components/views/ProductEdit/ProductEdit";
import Error404 from "./components/views/Error404/Error404";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <main>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/product/table" element={<ProductsTable />}/>
      <Route exact path="/product/create" element={<ProductCreate/>}/>
      <Route exact path="/product/edit" element={<ProductEdit/>}/>
      <Route exact path="*" element={<Error404/>}/>
      </Routes>

      </main>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
