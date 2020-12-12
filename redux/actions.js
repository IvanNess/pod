import { Auth } from "aws-amplify"
import { getUserByUsername, getUserByEmail, getOrders } from "../utils/graphql-utils"


export const fetchUser = () => async (dispatch)=>{
    dispatch({type: 'FETCH_USER_START'})
    try {
        const res = await Auth.currentAuthenticatedUser()
        console.log('fetch user res', res)
        const user = await getUserByUsername(res.username)
        dispatch({type: 'FETCH_USER_SUCCESS', user})
    } catch (error) {
        dispatch({type: 'FETCH_USER_FAILURE', error})        
    }
}

export const logout = () => async (dispatch)=>{
    dispatch({type: 'LOGOUT_START'})
    try {
        await Auth.signOut()
        dispatch({type: 'LOGOUT_SUCCESS'})
    } catch (error) {
        dispatch({type: 'LOGOUT_FAILURE', error})        
    }
}

export const login = (email, password) => async (dispatch)=>{
    dispatch({type: 'LOGIN_START'})
    try {
        console.log(email, password)
        const user = await getUserByEmail(email)
        await Auth.signIn(user.username, password)
        dispatch({type: 'LOGIN_SUCCESS', user})
    } catch (error) {
        dispatch({type: 'LOGIN_FAILURE', error})        
    }
}

export const startLoading = ()=>async (dispatch)=>dispatch({type: 'LOADING_START'})

export const finishLoading = ()=>async (dispatch)=>dispatch({type: 'LOADING_FINISH'})

export const signUpStart = ()=>async (dispatch)=>dispatch({type: 'SIGNUP_START'})

export const signUpSuccess = (user)=>async (dispatch)=>dispatch({type: 'SIGNUP_SUCCESS', user})

export const signUpFailure = (error)=>async (dispatch)=>dispatch({type: 'SIGNUP_FAILURE', error})

export const fetchOrders = () => async (dispatch)=>{
    dispatch({type: 'FETCH_ORDERS_START'})
    try {
        const res = await getOrders()
        console.log('fetch order res', res)
        dispatch({type: 'FETCH_ORDERS_SUCCESS', orders})
    } catch (error) {
        dispatch({type: 'FETCH_ORDERS_FAILURE', error})        
    }
}

export const ordersRecieved = (orders)=>async (dispatch)=>dispatch({type: 'FETCH_ORDERS_SUCCESS', orders})

