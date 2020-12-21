import { AUTH_LOGIN } from "../constants/authConstants"

export const login = (uid) => (dispatch, getState) => {
    dispatch({
        type: AUTH_LOGIN,
        payload: {
            uid
        }
    })
}