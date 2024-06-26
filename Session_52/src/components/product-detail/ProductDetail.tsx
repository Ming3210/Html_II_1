import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
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
  let productDetail = products.filter((item) => {
    return item.id == Number(productId);
  });
  console.log(productDetail);

  return (
    <div>
      ProductDetail
      <p>Tên: {productDetail[0].name}</p>
      <p>Giá: {productDetail[0].price}</p>
      <p>Mô tả: {productDetail[0].description}</p>
    </div>
  );
}
