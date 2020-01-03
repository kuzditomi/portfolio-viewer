import { connect } from "react-redux";
import { AppState } from "../store";
import { isAuthenticatedSelector, userNameSelector } from './authentication.selectors';
import { UserWelcomeComponentStateProps } from './UserWelcome.component';
import UserWelcomeComponent from './UserWelcome.component';

const mapStateToProps = (state: AppState): UserWelcomeComponentStateProps => ({
    isAuthenticated: isAuthenticatedSelector(state),
    userName: userNameSelector(state)
});

export default connect<UserWelcomeComponentStateProps, {}, {}, AppState>(
    mapStateToProps,
)(UserWelcomeComponent);
