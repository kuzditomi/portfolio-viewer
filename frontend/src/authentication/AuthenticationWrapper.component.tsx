import React, { useEffect } from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import LoginPageComponent from "./LoginPage.component";

const styles = () =>
    createStyles({
        input: {
            display: "none"
        }
    });

export interface AuthenticationWrapperStateProps {
    isAuthenticated: boolean;
}

export interface AuthenticationWrapperDispatchProps {
    startAuthentication(): void;
}

const AuthenticationWrapperComponent: React.FC<AuthenticationWrapperStateProps & AuthenticationWrapperDispatchProps & WithStyles<typeof styles>> = (
    { startAuthentication, isAuthenticated, children }) => {

    useEffect(() => {
        if (!isAuthenticated) {
            startAuthentication();
        }
    });

    if (isAuthenticated) {
        return <>
            {children}
        </>;
    } else {
        return <LoginPageComponent />;
    }
};

export default withStyles(styles)(AuthenticationWrapperComponent);
