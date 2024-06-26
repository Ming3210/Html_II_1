import React from "react";
import "./home.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
        {/*
        Sinh ra thêm nav link
        */}
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
