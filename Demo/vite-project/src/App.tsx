import React, { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import PrivateRoute from "./pages/PrivateRoute";
import ManageProduct from "./pages/ManageProduct";
import ManageEmployee from "./pages/ManageEmployee";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  return (
    <div>
      <nav style={{}}>
        <Link to="/admin">Home</Link>
        <Link to="/admin/manage-product">Product</Link>
        <Link to="/admin/manage-employee">Employee</Link>
      </nav>
      <Routes>
        <Route path="" element={<ProductList></ProductList>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route
          path="/productdetail/:id"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/admin" element={<PrivateRoute></PrivateRoute>}>
          <Route path="" element={<Dashboard></Dashboard>}></Route>
          <Route
            path="manage-product"
            element={<ManageProduct></ManageProduct>}
          ></Route>
          <Route
            path="manage-employee"
            element={<ManageEmployee></ManageEmployee>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}
