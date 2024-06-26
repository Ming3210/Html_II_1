const initialJob: any = [{
    id:1,
    name:"code",
    status:false
}]

const reducerJob = (state = initialJob, action: any) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]
        default:
            return state
    }
}

export default reducerJob;