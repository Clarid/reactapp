import { DELETE_USER, CHANGE_USER_NAME } from "../actions/actionTypes";

export default function userReducer(store){
    return function(state=store, action) {
        let users = [];
        switch(action.type) {
            case DELETE_USER:
    
                users = [...state.users];
                users.splice(action.payload, 1);
    
                return {
                    ...state,
                    users: users
                }
            case CHANGE_USER_NAME:
                users = [...state.users];
                users[action.payload.index].name = action.payload.name;
                return {
                    ...state,
                    users: users
                }
            default: return state
        }
    }
}
