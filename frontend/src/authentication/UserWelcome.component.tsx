import React from "react";

export interface UserWelcomeComponentStateProps {
    isAuthenticated: boolean;
    userName?: string;
}

const UserWelcomeComponent: React.FC<UserWelcomeComponentStateProps> = ({ isAuthenticated, userName }) => {
    if (!isAuthenticated) {
        return null;
    }

    return (
        <span>
            Hello, {userName} !
        </span>
    );
};

export default UserWelcomeComponent;
