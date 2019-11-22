import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import SwitcherItemComponent, { SwitcherItemProps } from './SwitcherItem.component';

const styles = createStyles({
    container: {
        overflow: 'hidden',
        display: 'flex'
    }
});


export interface SwitcherProps {
    children: React.ReactElement<SwitcherItemProps & HTMLElement>[];
    activeKey: string;
}

export function getOffsetForChildren(index: number, totalCount: number): number {
    return 0;
}

const SwitcherComponent: React.FC<SwitcherProps & WithStyles<typeof styles>> = ({ children, activeKey, classes }) => {
    const childrenItems = React.Children.toArray(children);

    childrenItems.forEach(child => {
        const key = child.props.switcherKey;

        if (!key) {
            throw Error('No key defined in Switcher component child element');
        }
    });

    return <div className={classes.container}>{
        React.Children.map(children, (child, index) =>
            <SwitcherItemComponent {...child.props} offset={child.props.switcherKey === activeKey ? 0 : getOffsetForChildren(index, childrenItems.length)}>
                {child.props.children}
            </SwitcherItemComponent>
        )
    }</div>;
};

export default withStyles(styles)(SwitcherComponent);
