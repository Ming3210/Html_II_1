import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

export default function Register() {
  let navigate = useNavigate();
  const [inputValue, setInputValue] = useState<User>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let password = e.target.value;
    let email = e.target.value;
    let user = {
      email: email,
      password: password,
    };
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const register = () => {
    // lấy gtri ng dùng nhập vào
    // xử lí tác vụ
    // validate
    // chuyển sang trang login
    let user = inputValue;
    navigate("/login", { state: user });
  };
  return (
    <div>
      Register <br />
      <label htmlFor="">email</label>
      <input name="email" onChange={handleChange} type="text" /> <br />
      <label htmlFor="">password</label>
      <input name="password" onChange={handleChange} type="text" /> <br />
      <button onClick={register}>Register</button>
    </div>
  );
}
