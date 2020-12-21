import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_SHOW_LOGIN_DIALOG } from "../constants/authConstants";

export const authReducer = (state = { isLogin: false, uid: null, showLoginDialog: false }, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return { ...state, isLogin: true, uid: action.payload };

        case AUTH_LOGOUT:
            return { ...state, isLogin: false, uid: null };

        case AUTH_SHOW_LOGIN_DIALOG:
            return { ...state, showLoginDialog: action.payload };
        default:
            return state;
    }
};
