import {
    LOADING_UI,
    STOP_LOADING_UI,
    LOADING_DATA,
    STOP_LOADING_DATA,
    DIALOG_EDIT,
    DIALOG_EDIT_FALSE,
    DIALOG_HAPUS,
    DIALOG_HAPUS_FALSE,
    DIALOG_ADD,
    DIALOG_ADD_FALSE,
    ALERT_SUCCES,
    ALERT_SUCCES_FALSE,
    ALERT_ERROR,
    ALERT_ERROR_FALSE,
    ALERT_SUCCES_UPDATE,
    ALERT_SUCCES_UPDATE_FALSE,
    ALERT_SUCCES_DELETE,
    ALERT_SUCCES_DELETE_FALSE,
    SCAN_POPUP_FAILED,
    SCAN_POPUP_FAILED_FALSE,
    SCAN_POPUP_GUEST,
    SCAN_POPUP_GUEST_FALSE,
    SCAN_USER_NOTFOUND,
    SCAN_USER_NOTFOUND_FALSE,
    SCAN_POPUP_PENGURUS,
    SCAN_POPUP_PENGURUS_FALSE
 } from '../../utils/types';


const dataReducer = (state, action) => {

    switch(action.type){
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false
            }
        case LOADING_DATA:
            return {
                ...state,
                loadingData: true
            }
        case STOP_LOADING_DATA:
            return {
                ...state,
                loadingData: false
            }
        case DIALOG_EDIT:
            return {
                ...state,
                dialogEditForm: true
            }
        case DIALOG_EDIT_FALSE:
            return {
                ...state,
                dialogEditForm: false
                }
        case DIALOG_HAPUS:
            return {
                ...state,
                dialogHapusForm: true
                    }
        case DIALOG_HAPUS_FALSE:
            return {
                 ...state,
                 dialogHapusForm: false
         }
        case DIALOG_ADD :
            return {
                ...state,
                dialogAddForm: true
            }
        case DIALOG_ADD_FALSE :
            return {
                ...state,
                dialogAddForm: false
            }
        case ALERT_SUCCES :
            return {
                ...state,
                alertSucces: true
            }
        case ALERT_SUCCES_FALSE:
            return {
                ...state,
                alertSucces: false
            }
        case ALERT_ERROR :
            return {
                ...state,
                alertError: true
                }
        case ALERT_ERROR_FALSE:
            return {
                ...state,
                alertError: false
                }
        case ALERT_SUCCES_UPDATE : 
            return {
                ...state,
                alertSuccesUpdate: true
            }
        case ALERT_SUCCES_UPDATE_FALSE : 
            return {
                ...state,
                alertSuccesUpdate: false
            }
        case ALERT_SUCCES_DELETE :
            return {
                ...state,
                alertSuccesDelete: true
            }
        case ALERT_SUCCES_DELETE_FALSE :
            return {
                ...state,
                alertSuccesDelete : false
            }
        case SCAN_POPUP_FAILED :
            return {
                ...state,
                popupFailed: true
            }
        case SCAN_POPUP_FAILED_FALSE :
            return {
                    ...state,
                    popupFailed: false
            }

         case SCAN_POPUP_GUEST :
                    return {
                        ...state,
                        popupGuest: true
                    }
        case SCAN_POPUP_GUEST_FALSE :
                    return {
                            ...state,
                            popupGuest: false
                        }
        case SCAN_USER_NOTFOUND :
                    return {
                        ...state,
                        scanUserNotFound: true
                    }
        case SCAN_USER_NOTFOUND_FALSE :
                    return {
                        ...state,
                        scanUserNotFound: false
                        }
        case SCAN_POPUP_PENGURUS :
                    return {
                        ...state,
                        popupPeng: true
                    }
        case SCAN_POPUP_PENGURUS_FALSE :
                    return {
                        ...state,
                        popupPeng: false
                    }
        default:
            return state
    }
}


export default dataReducer