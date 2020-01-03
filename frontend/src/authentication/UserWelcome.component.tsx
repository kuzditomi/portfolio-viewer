import React from "react";
import { Typography, IconButton } from '@material-ui/core';
import LogoutIcon from "@material-ui/icons/ExitToApp";

export interface UserWelcomeComponentStateProps {
    isAuthenticated: boolean;
    userName?: string;
}

export interface UserWelcomeComponentDispatchProps {
    signOut(): void;
}

const UserWelcomeComponent: React.FC<UserWelcomeComponentStateProps & UserWelcomeComponentDispatchProps> = ({ isAuthenticated, userName, signOut }) => {
    if (!isAuthenticated) {
        return null;
    }

    return (
        <>
            <Typography>
                Hello, {userName}!
            </Typography>
            <IconButton title="Log out" onClick={() => signOut()}>
                <LogoutIcon />
            </IconButton>

        </>
    );
};

export default UserWelcomeComponent;
