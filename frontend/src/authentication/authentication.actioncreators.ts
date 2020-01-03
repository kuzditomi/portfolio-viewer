import { Dispatch } from 'redux';
import { authService } from './Auth.service';
import { loggedInAction, loggedInErrorAction } from './authentication.actions';

export const startAuthentication = async (dispatch: Dispatch)=>{
    try {
        const user = await authService.GetUser();
        dispatch(loggedInAction({
            name: user
        }));
    } catch {
        dispatch(loggedInErrorAction(undefined));
    }

}