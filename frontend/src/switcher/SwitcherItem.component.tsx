import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import clsx from 'clsx';

const styles = createStyles({
    item: {
        flexShrink: 0,
        width: '100%',
        transition: 'height linear 0.2s, margin ease 0.3s',
        height: 0
    },
    active: {
        marginLeft: 0,
        height: 'auto'
    },
    offsetLeft: {
        marginLeft: '-100%'
    },
    offsetRight: {
        marginLeft: '100%'
    }
});

export interface SwitcherItemProps {
    switcherKey: string,
    offset?: number
}

const SwitcherItemComponent: React.FC<SwitcherItemProps & WithStyles<typeof styles>> = ({ children, offset, classes }) => {
    return <div className={clsx(classes.item, {
        [classes.active]: offset === 0,
        [classes.offsetLeft]: offset && offset < 0,
        [classes.offsetRight]: offset && offset > 0
    })}>{children}</div>;
};

export default withStyles(styles)(SwitcherItemComponent);
