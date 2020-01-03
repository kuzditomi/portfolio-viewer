import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../store";
import { isAuthenticatedSelector } from './authentication.selectors';
import AuthenticationWrapperComponent, { AuthenticationWrapperStateProps } from "./AuthenticationWrapper.component";
import { AuthenticationWrapperDispatchProps } from './AuthenticationWrapper.component';
import { startAuthentication } from './authentication.actioncreators';

const mapStateToProps = (state: AppState): AuthenticationWrapperStateProps => ({
    isAuthenticated: isAuthenticatedSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch): AuthenticationWrapperDispatchProps => ({
  startAuthentication: () => {
    startAuthentication(dispatch);
  }
});

export default connect<AuthenticationWrapperStateProps, AuthenticationWrapperDispatchProps, {}, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(AuthenticationWrapperComponent);
