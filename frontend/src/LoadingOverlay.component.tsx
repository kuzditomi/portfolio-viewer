import React from "react";
import { createStyles, WithStyles, withStyles, CircularProgress } from "@material-ui/core";

const styles = () =>
    createStyles({
        overlay: {
            display: "flex",
            alignItems: "center",
            zIndex: 1000,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.4)',
        },
        progress: {
            margin: '0 auto'
        }
    });

export interface LoadingOverlayComponentProps {
    isLoading: boolean;
}

const LoadingOverlayComponent: React.FC<LoadingOverlayComponentProps & WithStyles<typeof styles>> = ({ isLoading, classes }) => {
    if (!isLoading) {
        return null;
    }

    return (
        <div className={classes.overlay}>
            <CircularProgress color="secondary" className={classes.progress} />
        </div>
    );
};

export default withStyles(styles)(LoadingOverlayComponent);
