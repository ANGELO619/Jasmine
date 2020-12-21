import { AUTH_LOGIN, AUTH_LOGOUT } from "../constants/authConstants";

export const authReducer = (state = { isLogin: false, uid: null }, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return { ...state, isLogin: true, uid: action.payload.uid };
        case AUTH_LOGOUT:
            return { ...state, isLogin: false, uid: null };
        default:
            return state;
    }
};
