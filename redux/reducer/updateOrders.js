export const updateOrders = (state, action)=>{
    if(state===undefined){
        return{
            data: null,
            loading: true,
            error: null
        }
    }
    switch(action.type){
        case "FETCH_ORDERS_START":
            return {data: null, loading: true, error: false}
        case "FETCH_ORDERS_SUCCESS":
            return {data: action.orders, loading: false, error: false}
        case "FETCH_ORDERS_FAILURE":
            return {data: false, loading: false, error: action.error}
        default:
            return state.orders
    }
}