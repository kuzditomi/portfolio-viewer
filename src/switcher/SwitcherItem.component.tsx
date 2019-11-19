import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";

const styles = createStyles({});

export interface SwitcherItemProps {
    switcherKey: string
}

const SwitcherItemComponent: React.FC<SwitcherItemProps & WithStyles<typeof styles>> = ({ children }) => {
    return <>{children}</>;
};

export default withStyles(styles)(SwitcherItemComponent);
