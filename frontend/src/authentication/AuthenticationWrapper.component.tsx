import React, { useState, useEffect } from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import LoginPageComponent from "../login/LoginPage.component";
import { authService } from "./Auth.service";

const styles = () =>
    createStyles({
        input: {
            display: "none"
        }
    });

const AuthenticationWrapperComponent: React.FC<WithStyles<typeof styles>> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<string | false | null>(null);

    const startAuthentication = async () => {
        try {
            const user = await authService.GetUser();
            setIsAuthenticated(user);
        } catch {
            setIsAuthenticated(false);
        }
    }

    useEffect(() => {
        startAuthentication();
    });

    if (isAuthenticated) {
        return (
            <>
                <h1 style={{marginTop: 200}}>Hello {isAuthenticated}</h1>
                {children}
            </>
        );
    } else if (isAuthenticated === false) {
        return <LoginPageComponent />;
    } else {
        return <>Authenticating...</>
    }
};

export default withStyles(styles)(AuthenticationWrapperComponent);
