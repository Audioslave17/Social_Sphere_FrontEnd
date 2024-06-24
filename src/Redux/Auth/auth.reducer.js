import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from "./auth.actionType";

const initialstate ={
    jwt:null,
    error:null,
    loading:false
}
export const authReducer = (state=initialstate,action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return {...state, loading: true, error:null}

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {...state, jwt:action.payload ,loading:false, error:null}

        case LOGIN_FAILURE:
        case REGISTER_FAILURE:    
            return {...state, loading: false, error:action.payload}  

        default:
            return state;
    }
}
