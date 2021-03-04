import {
    GET_USER_EDIT,
    SET_USER,
    AUTHENTICATION,
    UNAUTHENTICATION,
    SET_ERRORS,
    CLEAR_ERRORS,
    SCAN_USER,
    SCAN_USER_FALSE
} from '../../utils/types';

const userReducer = (state, action) => {

  
    switch(action.type){

        case SET_USER:
            return {
                ...state,
                user: action.value
            }
        case AUTHENTICATION: {
            return {
                ...state,
                authenticated: true
                
            }
        }
        case SET_ERRORS : {
            return {
                ...state,
                errorResponse: action.value
            }
        }
        case GET_USER_EDIT : 
            return {
                ...state,
                dataEdit: action.value
            }
        case CLEAR_ERRORS : 
            return {
                ...state,
                errorResponse: {}
            }
        case SCAN_USER :
            return {
                ...state,
                spg: action.value
            }
        case SCAN_USER_FALSE :
            return {
                ...state,
                spg: {}
            }
        case UNAUTHENTICATION: {
            return state
        }
      
        default:
            return state
    }

}


export default userReducer;