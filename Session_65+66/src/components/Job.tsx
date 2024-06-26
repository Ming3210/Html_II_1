import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Job() {
  const stateJob: any = useSelector((state) => {
    return state;
  });
  console.log(stateJob);
  const dispatch = useDispatch();
  const addJob = () => {
    let newJob = {
      id: 2,
      name: "Run",
      status: false,
    };

    dispatch({
      type: "ADD",
      payload: newJob,
    });
  };

  return (
    <div>
      Job
      <button onClick={addJob}>Add</button>
      {stateJob.reducerJob.map((job: any) => {
        return (
          <li>
            {job.name}
            {job.status}
          </li>
        );
      })}
    </div>
  );
}
