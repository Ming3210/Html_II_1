import React, { useState } from 'react'
import JobItem from './Job_item'
import { v4 as uuidv4 } from 'uuid';

type Job = {
    name: string;
    id: string;
    status: boolean;
}

export default function TodoList() {
    const [inputValue, setInputValue] = useState<string>("")   // State để lưu trữ giá trị trong input
    const [showError,setShowError] = useState<boolean>(false)  // State để xem trạng thái ẩn hiện lỗi
    const [jobLocal,setJobLocal] = useState<Job[]>(() => {     
        const listJobLocal = localStorage.getItem("jobs")   
        // Kiểm tra xem trên local có dữ liệu ko, nếu có sẽ ép kiểu JSON thành JS, nếu ko có sẽ là []
        const listJob = listJobLocal ? JSON.parse(listJobLocal) : []
        return listJob
    })
    const [stateFake,setStateFake] = useState<string>("")


    // Hàm lưu dữ liệu lên localStorage
    const setLocalStorage = (key:string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // lấy giá trị trong ô input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Cập nhật giá trị của state
        setInputValue(e.target.value)
        
        // validate dữ liệu đầu vào
        if(!e.target.value){
            setShowError(true)
        }else{
            setShowError(false)
        }
        
    }


    //Hàm thêm mới công việc
    const handleCreateJob = ()=>{
        // Kiểm tra điều kiện input đã có dữ liệu chưa
        if(inputValue){
            const job: Job ={
                id: uuidv4(),
                name: inputValue,
                status: false,
            }
            
            // Đẩy dữ liệu trên local
            // setJobLocal([...jobLocal, job])
            jobLocal.push(job)

            // Lưu dữ liệu lên local
            setLocalStorage("jobs",jobLocal)
            
            // Reset lại giá trị trong ô input
            setInputValue("")
        }
    }

    // Hàm xử lí thay đổi trang thái công việc
    const handleChangeStatus = ((id:string)=>{
        // Tìm kiếm công việc theo id
        console.log(id);
        const findIndexJob =  jobLocal.findIndex((job:Job)=> job.id ==id)

        if (findIndexJob === -1){
            alert("Ko tìm thấy")
        }else{
            // Thay đổi trạng thái của công việc
            jobLocal[findIndexJob].status = !jobLocal[findIndexJob].status

            // Cập nhật lại dữ liệu trên local
            setStateFake(uuidv4())


            // Lưu dữ liệu lên local
            setLocalStorage("jobs",jobLocal)
            
        }
    })
    
  return (
    <div>
        <div className="todo-container">
        <h2>ToDo List</h2>
        <div className="input-container">
          <input value={inputValue} onChange={handleChange} type="text" id="taskInput" placeholder="Add new task..." />
          <button className="button" onClick={handleCreateJob}>Add Task</button>
        </div>
        {
            showError ? <div className="error">Tên công việc ko đc để trống</div> : ""
        }
        
        <ul id="taskList">
            {/* Render danh sách công việc */}
            {
                jobLocal.map((job:Job) =>(
                    <>
                    
                        <JobItem job={job} handleChangeStatus = {handleChangeStatus}/>
                        
                </>
                ))
            }
        </ul>
        <p>
          Tasks completed: <span id="completedTasks">0</span>
        </p>
      </div>
    </div>
  )
}
