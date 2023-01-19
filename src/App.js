import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./companent/Header/Header";
import Product from "./companent/Product/Product";
import Footer from "./companent/Footer/Footer";
import Home from "./companent/Home/Home";
import ContactUs from "./companent/Contact-Us/ContactUs";

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Header />
 

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
