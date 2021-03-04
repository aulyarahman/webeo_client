import {
    GET_DATA,
    GET_USER_EDIT,
    EDIT_DATA,
    GET_ALL_DATA
    
} from '../../utils/types';

const dataUserReducer = (state, action) => {

  
    switch(action.type){

        case EDIT_DATA :
            return {
                ...state,
                dataEdit: action.value
            }
        case GET_DATA :
            return {
                ...state,
                getData: action.value

            }
        case GET_ALL_DATA :
            return {
                ...state,
                allData: action.value
            }

      
        default:
            return state
    }

}


export default dataUserReducer;