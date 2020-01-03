import React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/styles";
import { Theme, Container, Button } from '@material-ui/core';
import { authService } from './Auth.service';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            display: "flex"
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4)
        },
        paper: {
            padding: theme.spacing(2),
            display: "flex",
            overflow: "auto",
            flexDirection: "column"
        }
    });


const LoginPageComponent: React.FC<WithStyles<typeof styles>> = ({ classes }) => {
    return (
        <main className={classes.content} >
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container} >
                <Button color="primary" variant="contained" onClick={() => { authService.LogIn() }} >
                    Login with google account
                </Button>
            </Container>
        </main>
    );
};

export default withStyles(styles)(LoginPageComponent);
