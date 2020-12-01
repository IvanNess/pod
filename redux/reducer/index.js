import { updateUser } from "./updateUser"

const reducer = (state, action)=>{
    return{
        user: updateUser(state, action)
    }
}

export default reducer