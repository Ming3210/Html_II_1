import React from "react";
import ProductList from "./components/ProductList";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductDetail from "./components/product-detail/ProductDetail";
import NotFound from "./components/not-found/NotFound";
import Cart from "./components/cart/Cart";

export default function App() {
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/cart");
    console.log("111");
  };
  return (
    <div>
      App
      <br />
      <b style={{ cursor: "pointer" }} onClick={redirect}>
        Giỏ hàng
      </b>
      {/*
    Tạo danh sách sp ở component ProductList
    Tạo component Product là danh sách của từng sp
     + Xem chi tiết
    Tạo component ProductDetail chi tiết từng sản phẩm

    Các bước làm :
    B1 : 


    */}
      <br />
      <Routes>
        <Route path="/" element={<ProductList></ProductList>}>
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail></ProductDetail>}
          ></Route>
        </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}
