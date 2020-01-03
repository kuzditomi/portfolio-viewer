import { connect } from "react-redux";
import { AppState } from "../store";
import { isAuthenticatedSelector, userNameSelector } from './authentication.selectors';
import { UserWelcomeComponentStateProps, UserWelcomeComponentDispatchProps } from './UserWelcome.component';
import UserWelcomeComponent from './UserWelcome.component';
import { Dispatch } from 'redux';
import { logout } from "./authentication.actioncreators";

const mapStateToProps = (state: AppState): UserWelcomeComponentStateProps => ({
    isAuthenticated: isAuthenticatedSelector(state),
    userName: userNameSelector(state)
});


const mapDispatchToProps = (dispatch: Dispatch): UserWelcomeComponentDispatchProps => ({
    signOut: ()=>{
        logout(dispatch);
    }
});

export default connect<UserWelcomeComponentStateProps, UserWelcomeComponentDispatchProps, {}, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(UserWelcomeComponent);
