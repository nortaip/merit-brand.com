import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./companent/Header/Header";
import Products from "./companent/Products/Products";
import Footer from "./companent/Footer/Footer";
import Home from "./companent/Home/Home";
import ContactUs from "./companent/Contact-Us/ContactUs";
import ProductDetails from "./companent/ProductDetails";
import Navbar from "./companent/Navbar/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
