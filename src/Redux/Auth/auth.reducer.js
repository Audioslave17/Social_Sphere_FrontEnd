import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./auth.actionType";

const initialstate ={
    jwt:null,
    error:null,
    loading:false
}
const authReducer = (state=initialstate,action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true, error:null}
        case LOGIN_SUCCESS:
            return {...state, jwt:action.payload ,loading:false, error:null}
        case LOGIN_FAILURE:
            return {...state, loading: false, error:action.payload}     
        default:
            return state;
    }
}
