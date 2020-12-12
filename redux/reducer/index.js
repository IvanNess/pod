import { updateUser } from "./updateUser"
import { updateOrders } from "./updateOrders"

const reducer = (state, action)=>{
    return{
        user: updateUser(state, action),
        orders: updateOrders(state, action)
    }
}

export default reducer