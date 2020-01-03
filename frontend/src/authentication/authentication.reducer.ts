import { AppActionTypes } from '../actions';
import { AUTHENTICATION_ACTIONS } from './authentication.actions';

export interface IUser {
    name: string;
}

export interface AuthenticationState {
    user?: IUser;
    hasError: boolean;
}

const initialState: AuthenticationState = {
    user: undefined,
    hasError: false
};

export default function (state = initialState, action: AppActionTypes): AuthenticationState {
    switch (action.type) {
        case AUTHENTICATION_ACTIONS.LOGGED_IN: {
            return {
                user: action.payload,
                hasError: false
            };
        }
        case AUTHENTICATION_ACTIONS.LOGGED_IN_ERROR: {
            return {
                user: undefined,
                hasError: true
            }
        }
        case AUTHENTICATION_ACTIONS.LOGGED_OUT: {
            return {
                user: undefined,
                hasError: false
            }
        }
        default:
            return state;
    }
}
