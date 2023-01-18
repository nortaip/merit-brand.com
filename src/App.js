import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./companent/Header/Header";
import Product from "./companent/Product/Product";
import Footer from "./companent/Footer/Footer";
import Home from "./companent/Home/Home";

function App() {
  return (
    <BrowserRouter >
    <div className="App">
      <Header />
      <Home/>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
