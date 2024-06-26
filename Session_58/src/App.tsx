import axios from "axios";
import { useEffect } from "react";

export default function App() {
  // useEffect(() => {
  //   // lấy tất cả các mảng ghi trong users
  //   axios
  //     .get("http://localhost:8080/users")
  //     .then((res) => console.log("Giá trọ dâta", res.data))
  //     .catch((err) => console.log(err));
  // },[]);

  // useEffect(() => {
  //   // lấy 1 mảng ghi trong users
  //   axios
  //     .get("http://localhost:8080/users/2")
  //     .then((res) => console.log("Giá trọ dâta", res))
  //     .catch((err) => console.log(err));
  // },[]);

  // useEffect(() => {
  //   let newUser = {
  //     name: "Nguyễn Văn A",
  //     address: "TH",
  //   };
  //   // thêm 1 mảng ghi trong users
  //   axios
  //     .post("http://localhost:8080/users", newUser)
  //     .then((res) => console.log("Giá trọ dâta", res))
  //     .catch((err) => console.log(err));
  // },[]);

  // useEffect(() => {
  //   // xóa 1 mảng ghi trong users
  //   axios
  //     .delete("http://localhost:8080/users/2")
  //     .then((res) => console.log("Giá trọ dâta", res))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   let update = {
  //     name: "Nguyễn Văn F",
  //   };
  //   // cập nhật 1 mảng ghi trong users
  //   axios
  //     .patch("http://localhost:8080/users/3", update)
  //     .then((res) => console.log("Giá trọ dâta", res))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   // tim kiem theo ten co chu nguyễn
  //   axios
  //     .get("http://localhost:8080/users?name_like=hhh")
  //     .then((res) => console.log("Giá trọ dâta", res))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   // tim kiem theo ten co chu nguyễn
  //   axios
  //     .get("http://localhost:8080/users?name_like=^g")
  //     .then((res) => console.log("Giá trọ dâta", res))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   // sắp xếp name theo aphalbe
  //   // tăng dần : asc ( ascending ) tăng dần
  //   // giảm dần : desc ( descending ) giảm dần
  //   axios
  //     .get("http://localhost:8080/users?_sort=name&_order=desc")
  //     .then((res) => console.log("Giá trọ dâta", res))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    // Phân trang
    axios
      .get("http://localhost:8080/users?_page=1&_limit=4")
      .then((res) => console.log("Giá trọ dâta", res))
      .catch((err) => console.log(err));
  }, []);

  return <div>App</div>;
}
