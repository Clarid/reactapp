import { CHANGE_TITLE, CHANGE_NAME } from "../actions/actionTypes"

export default function userListReducer(store){
    return function(state=store, action) {
        switch(action.type) {
            case CHANGE_TITLE:
            return {
                ...state,
                title: action.payload
            }
            case CHANGE_NAME:
                return {
                    ...state,
                    users: action.payload
                }        
            default: return state
        }
    }
}