import React from "react";
import "./productList.css";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate();
  /*
    Lấy dữ liệu về để render
    */
  //  fecth data : Tạo mốc dât trước
  let products = [
    {
      id: 11,
      name: "product5",
      price: 1000,
      description: "",
      stock: 5,
      image:
        "https://th.bing.com/th/id/R.36742b0aaf56d92f96971c4b3ecda65c?rik=WK9N8ywuOIZIKw&pid=ImgRaw&r=0",
    },
    {
      id: 12,
      name: "product6",
      price: 2000,
      description: "",
      stock: 5,
      image:
        "https://th.bing.com/th/id/R.36742b0aaf56d92f96971c4b3ecda65c?rik=WK9N8ywuOIZIKw&pid=ImgRaw&r=0",
    },
    {
      id: 14,
      name: "product9",
      price: 12000,
      description: "",
      stock: 5,
      image:
        "https://th.bing.com/th/id/R.36742b0aaf56d92f96971c4b3ecda65c?rik=WK9N8ywuOIZIKw&pid=ImgRaw&r=0",
    },
    {
      id: 17,
      name: "product15",
      price: 10400,
      description: "",
      stock: 5,
      image:
        "https://th.bing.com/th/id/R.36742b0aaf56d92f96971c4b3ecda65c?rik=WK9N8ywuOIZIKw&pid=ImgRaw&r=0",
    },
    {
      id: 18,
      name: "product51",
      price: 51000,
      description: "",
      stock: 5,
      image:
        "https://th.bing.com/th/id/R.36742b0aaf56d92f96971c4b3ecda65c?rik=WK9N8ywuOIZIKw&pid=ImgRaw&r=0",
    },
  ];
  const handleClick = (id: number) => {
    navigate(`/product-detail/${id}`);
  };
  return (
    <>
      <div className="container">
        ProductList
        {products.map((item) => {
          return (
            <div key={item.id}>
              <p>Tên: {item.name}</p>
              <p>Giá :{item.price}</p>
              <p>
                Ảnh <br />
                <img src={item.image} alt="" />
              </p>
              <button>Mua</button>
              <button onClick={() => handleClick(item.id)}>Xem chi tiết</button>
            </div>
          );
        })}
      </div>
      <Outlet></Outlet>
    </>
  );
}
