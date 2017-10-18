import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {withStyles} from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Warning from 'material-ui-icons/Warning';
import red from 'material-ui/colors/red';
import ChatListContainer from './ChatListContainer';
import ChatInputContainer from './ChatInputContainer';

const styles = (theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    chip: {
        margin: `0 auto ${theme.spacing.unit}px`,
    },
    iconWarning: {
        color: red[500],
    },
});

const ChipConnection = ({classes}) => (
    <Chip
        className={classes.chip}
        label="Connection failed"
        avatar={<Avatar>
            <Warning className={classes.iconWarning}/>
        </Avatar>}
    />
);

class ChatContainer extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        store: PropTypes.object,
    };

    componentDidMount() {
        this.props.store.subscribeToPull();
    }

    componentWillUnmount() {
        this.props.store.unsubscribeToPull();
    }

    render() {
        const {classes, store} = this.props;

        return (
            <div className={classes.root}>
                {!store.connected ? (<ChipConnection classes={classes}/>) : null}
                <ChatListContainer messages={store.messages}/>
                <ChatInputContainer store={store}/>
            </div>
        );
    }
}

export default (withStyles(styles))(observer(ChatContainer));