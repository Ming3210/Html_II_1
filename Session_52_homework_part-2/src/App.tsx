import React from "react";
import "./css/bootstrap.min.css";
import "./lib/animate/animate.css";
import "./lib/animate/animate.min.css";
import "./lib/owlcarousel/assets/owl.carousel.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "./lib/owlcarousel/assets/owl.theme.default.css";
import "./lib/owlcarousel/assets/owl.theme.default.min.css";
import "./lib/owlcarousel/assets/owl.theme.green.css";
import "./lib/owlcarousel/assets/owl.theme.green.min.css";
// import "./scss/bootstrap/scss/_dropdown.scss";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Open from "./components/open/Open";
import Price from "./components/price/Price";
import Team from "./components/team/Team";
import Testimonial from "./components/testimonial/Testimonial";
import Service from "./components/service/Service";
import NotFound from "./NotFound";
// import "./css/style.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/open" element={<Open></Open>}></Route>
        <Route path="/price" element={<Price></Price>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route
          path="/testimonial"
          element={<Testimonial></Testimonial>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>{" "}
      <Outlet></Outlet>
    </div>
  );
}
