import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import NotFound from "./NotFound";
import About from "./components/about/About";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";

export default function App() {
  return (
    <div>
      REACT ROUTER DOM
      {/*
      Tạo 1 bộ định tuyến cho trang web của mình tức là nó sẽ cho phép react element đc hiển thị ứng với các đường dẫn URL 
      Cách dùng: 
      Cài đặt : npm instal react -router -dom
    */}
      <Routes>
        <Route path="" element={<Home></Home>}>
          <Route element={<About></About>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/news" element={<News></News>}></Route>
          <Route
            path="/contact"
            element={
              <>
                <Contact></Contact>
              </>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}
