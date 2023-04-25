import { Footer, Header } from "components";
import { Cart, Home, Login, Product, Error } from "pages";
import ProductDetails from "pages/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-left" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
