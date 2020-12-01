export const updateUser = (state, action)=>{
    if(state===undefined){
        return{
            data: null,
            loading: true,
            error: null
        }
    }
    switch(action.type){
        case "FETCH_USER_START":
            return {data: null, loading: true, error: false}
        case "LOGIN_START":
            return {data: false, loading: true, error: false}
        case "FETCH_USER_SUCCESS":
        case "LOGIN_SUCCESS":
            return {data: action.user, loading: false, error: false}
        case "FETCH_USER_FAILURE":
        case "LOGIN_FAILURE":
            return {data: false, loading: false, error: action.error}
        case "LOGOUT_START":
            return {data: state.user.data, loading: true, error: false}
        case "LOGOUT_SUCCESS":
            return {data: null, loading: false, error: false}
        case "LOGOUT_FAILURE":
            return {data: state.user.data, loading: false, error: action.error}                                        
        default:
            return state.user
    }
}