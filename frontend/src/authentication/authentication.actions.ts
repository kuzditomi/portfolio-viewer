import { AppAction } from '../actions';
import { IUser } from './authentication.reducer';

export enum AUTHENTICATION_ACTIONS {
    LOGGED_IN = 'AUTHENTICATION/LOGIN',
    LOGGED_IN_ERROR = 'AUTHENTICATION/LOGIN_ERROR',
    LOGGED_OUT = 'AUTHENTICATION/LOGOUT'
}

export const loggedInAction: AppAction<AUTHENTICATION_ACTIONS.LOGGED_IN, IUser> = (payload) => ({
    type: AUTHENTICATION_ACTIONS.LOGGED_IN,
    payload
});

export const loggedInErrorAction: AppAction<AUTHENTICATION_ACTIONS.LOGGED_IN_ERROR> = () => ({
    type: AUTHENTICATION_ACTIONS.LOGGED_IN_ERROR,
    payload: undefined
});


export const loggedOutAction: AppAction<AUTHENTICATION_ACTIONS.LOGGED_OUT> = () => ({
    type: AUTHENTICATION_ACTIONS.LOGGED_OUT,
    payload: undefined
});


export type AUTHENTICATION_ACTION_TYPES = ReturnType<typeof loggedInAction> | ReturnType<typeof loggedInErrorAction> | ReturnType<typeof loggedOutAction>;
