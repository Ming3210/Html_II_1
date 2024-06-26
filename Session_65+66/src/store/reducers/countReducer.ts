// Khởi tạo state
const initialCount :number = 0
 // Khởi tạo hàm rêducerCount

 const reducerCount = (state = initialCount,action:any)=> {
    switch (action.type) {
        case "INCREASE":
            return state+action.payload
        case "DECREASE":
            return state-1
        default:
            return state
    }
 }
 export default reducerCount