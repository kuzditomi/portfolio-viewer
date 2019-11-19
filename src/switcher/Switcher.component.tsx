import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import { SwitcherItemProps } from './SwitcherItem.component';

const styles = createStyles({});


export interface SwitcherProps {
    children: React.Component<SwitcherItemProps>[]
}

const SwitcherComponent: React.FC<SwitcherProps & WithStyles<typeof styles>> = ({ children }) => {
    const keys = React.Children.toArray(children).map(child => {
        const key = child.props.switcherKey;

        if (!key) {
            throw Error('No key defined in Switcher component child element');
        }

        return key;
    });

    console.log(keys);

    return <>{children}</>;
};

export default withStyles(styles)(SwitcherComponent);
