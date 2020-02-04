import React from "react";
import red from '@material-ui/core/colors/red';
import { Theme } from '@material-ui/core';
import {
    Button,
    WithStyles,
    createStyles,
    withStyles,
    Typography,
} from "@material-ui/core";
import TrashIcon from "@material-ui/icons/Delete";

const styles = (theme: Theme) => createStyles({
    button: {
        color: theme.palette.getContrastText(red[700]),
        backgroundColor: red[700],
        '&:hover': {
            backgroundColor: red[900],
        },
    }
});

export interface ResetAccountStateProps {
    loading: boolean;
}


export interface ResetAccountDispatchProps {
    resetAccount: () => void;
}

const ResetAccountComponent: React.FC<ResetAccountStateProps & ResetAccountDispatchProps & WithStyles<typeof styles>> = ({ classes, loading, resetAccount }) => {
    return (
        <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>Reset</Typography>
            <Button disabled={loading} variant="contained" className={classes.button} onClick={() => resetAccount()}>
                <TrashIcon/> &nbsp;Remove all positions
            </Button>
        </>
    );
};

export default withStyles(styles)(ResetAccountComponent);
