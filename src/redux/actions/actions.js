import { CHANGE_TITLE, CHANGE_NAME, DELETE_USER, CHANGE_USER_NAME } from "./actionTypes";

export function changeTitleAction(title) {
    return {
        type: CHANGE_TITLE,
        payload: title
    }
}

export function changeName(users) {
    return {
        type: CHANGE_NAME, 
        payload: users
    }
}

export function changeUserName(name, index) {
    return {
        type: CHANGE_USER_NAME, 
        payload: {name, index}
    }
}

export function deleteUser(index) {
    return {
        type: DELETE_USER, 
        payload: index
    }
}

