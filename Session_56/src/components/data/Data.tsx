import React from "react";

export default function Data() {
  const data = fetch(" http://localhost:3000/user");
  data.then((info) => info.json()).then((info) => console.log(info));

  return <div>Data</div>;
}
