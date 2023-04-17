import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Order from "./components/order/Order";
import BookDetails from "./components/books/BookDetails";
import classes from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={classes.main}>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Order />} />
          <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
