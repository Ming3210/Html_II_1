import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCount } from "../actions";

export default function Count() {
  const stateCount: any = useSelector((state) => {
    return state;
  });
  const increase = () => {
    dispatch(actionCount("INCREASE", 1));
  };
  const decrease = () => {
    dispatch({
      type: "DECREASE",
    });
  };

  // Muốn bắn action (những hành động tương tác) thì dùng useDispatch
  const dispatch = useDispatch();
  // useSelector kiểm tra xem state có thay đổi hay ko thì cập nhật lại UI
  // Những state p thay đổi
  // [...]

  return (
    <div>
      Count
      <p>Giá trị count :{stateCount.reducerCount}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease}>Giảm</button>
    </div>
  );
}
