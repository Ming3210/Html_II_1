import React, { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const search = () => {
    setSearchParams({
      key: inputValue,
    });
  };
  return (
    <div>
      <nav>
        <Link to="productdetail/3">Click</Link>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={search}>Search</button>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
