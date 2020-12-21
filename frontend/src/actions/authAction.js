import { AUTH_LOGIN, AUTH_LOGOUT } from "../constants/authConstants"

export const login = (uid) => (dispatch, getState) => {
    dispatch({
        type: AUTH_LOGIN,
        payload: {
            uid
        }
    })
}

export const logout = () => (dispatch) => {
    dispatch({
        type: AUTH_LOGOUT
    })
}