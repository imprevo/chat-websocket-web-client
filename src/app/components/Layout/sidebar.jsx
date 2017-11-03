import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import HomeIcon from 'material-ui-icons/Home';
import ChatIcon from 'material-ui-icons/Chat';
import MouseIcon from 'material-ui-icons/Mouse';

const drawerWidth = 240;

const styles = (theme) => ({
    drawerPaper: {
        position: 'relative',
        maxHeight: '100%',
        width: drawerWidth,
        overflowX: 'hidden',
    },
    drawerHeader: {
        ...theme.mixins.toolbar,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: `0 ${theme.spacing.unit}px`,
    },
    iconExpand: {
        marginRight: 0,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class Sidebar extends React.Component {
    static PropTypes = {
        classes: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
        open: PropTypes.bool.isRequired,
        handleDrawerClose: PropTypes.func.isRequired,
    };

    render() {
        const {classes, theme, open, handleDrawerClose} = this.props;

        return (
            <Drawer
                type="persistent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                open={open}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List className={classes.list}>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Home"/>
                    </ListItem>
                    <ListItem button component={Link} to="/chat">
                        <ListItemIcon>
                            <ChatIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Chat"/>
                    </ListItem>
                    <ListItem button component={Link} to="/clicker">
                        <ListItemIcon>
                            <MouseIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="Clicker"/>
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Sidebar);