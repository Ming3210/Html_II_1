import React, { useEffect, useState } from "react";

type Students = {
  id: number;
  name: string;
  email: string;
  address: string;
};

export default function GetMethod() {
  //khi  dùng fecth mà ko dùng định nghĩa HTTP request thì mặc định nó là GET

  const [students, setStudents] = useState<Students[]>([]);

  const [student, setStudent] = useState<Students>({
    id: Math.ceil(Math.random() * 1000000),
    name: "",
    email: "",
    address: "",
  });

  const [typeSubmit, setTypeSubmit] = useState<string>("Add");

  const [inputValue, setInputValue] = useState<string>("");

  const loadData = () => {
    fetch(`http://localhost:3000/students?name_like=${inputValue}`)
      .then((respone: Response) => respone.json()) // Bước ép kiểu dữ liệu
      .then((data: Students[]) => setStudents(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [inputValue]);
  const handleDelete = (id: number) => {
    fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    })
      .then((respone: Response): any => {
        if (respone.ok) {
          loadData();
        }
      })
      .catch((error) => console.log(error));
  };

  // Hàm lấ giá trịn trong form
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Reset giá trị trong form

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Ngăn chặn hành vi load lại trang
    e.preventDefault();

    // 1. Validate dữ liệu

    // 2. Nếu valiadate ok thì Gửi dữ liệu lên server
    // Nếu typeSubmit là add sẽ thêm mới dữ liệu
    if (typeSubmit === "Add") {
      fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(student),
      })
        .then((response: Response) => {
          if (response.ok) {
            // Đóng form

            // Load lại dữ liệu
            loadData();

            // Reset giá trị trị trong form
            reset();
          }
        })
        .catch((error) => console.log(error));
    } else {
      // Nếu typeSubmit là update sẽ tiến hành cập nhật dữ liệu
      fetch(`http://localhost:3000/students/${student.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(student),
      }).then((response: Response) => {
        if (response.ok) {
          // Đóng form

          // Reset form
          reset();

          // Load lại dữ liệu
          loadData();

          // Cập nhật lại cho form
          setTypeSubmit("add");
        }
      });
    }

    // 2.1 Nếu gửi thành công: Đóng form, reset giá trị, load lại dữ liệu

    // 2.2. Nếu thất bại sẽ báo lỗi cho người dùng
  };
  const reset = () => {
    setStudent({
      id: Math.floor(Math.random() * 999999999999999999999),
      name: "",
      email: "",
      address: "",
    });
  };

  // Hàm lấy thông tin chi tiết 1 bản ghi theo id
  const handleGetInfo = (id: number) => {
    setTypeSubmit("Update");
    // Gọi API lấy thông tin chi tiết
    fetch(`http://localhost:3000/students/${id}`)
      .then((response: Response) => response.json())
      .then((data: Students) => setStudent(data))

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <table border={1} style={{ width: "50%" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: Students, index: number) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              <td>
                <button onClick={() => handleGetInfo(student.id)}>Sửa</button>
                <button onClick={() => handleDelete(student.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={handleChanges}
          value={student.name}
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={handleChanges}
          value={student.email}
          name="email"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={handleChanges}
          value={student.address}
          name="address"
          type="text"
          placeholder="Address"
        />
        <button type="submit">{typeSubmit}</button>
      </form>
    </div>
  );
}
