import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Header from './header';
import Sidebar from './sidebar';

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        width: '100%',
        zIndex: 1,
        overflow: 'hidden',
        backgroundColor: theme.palette.background.default,
    },
    appFrame: {
        width: '100%',
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'stretch',
    },
    content: {
        width: '100%',
        marginLeft: -drawerWidth,
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            content: {
                height: 'calc(100% - 64px)',
                marginTop: 64,
            },
        },
    },
    contentShift: {
        marginLeft: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
});

class Layout extends React.Component {
    static PropTypes = {
        classes: PropTypes.object.isRequired,
    };

    state = {
        open: true,
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes, children} = this.props;
        const {open} = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <Header open={open} handleDrawerOpen={this.handleDrawerOpen}/>
                    <Sidebar open={open} handleDrawerClose={this.handleDrawerClose}/>
                    <main className={classNames(classes.content, open && classes.contentShift)}>
                        {children}
                    </main>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Layout);