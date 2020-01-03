import { Dispatch } from 'redux';
import { authService } from './Auth.service';
import { loggedInAction, loggedInErrorAction, loggedOutAction } from './authentication.actions';

export async function startAuthentication(dispatch: Dispatch) {
    try {
        const user = await authService.GetUser();
        dispatch(loggedInAction({
            name: user
        }));
    } catch {
        dispatch(loggedInErrorAction(undefined));
    }
}

export async function logout(dispatch: Dispatch) {
    await authService.SignOut();
    
    dispatch(loggedOutAction(undefined));
}