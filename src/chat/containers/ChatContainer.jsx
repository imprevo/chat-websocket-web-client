import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {withStyles} from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Warning from 'material-ui-icons/Warning';
import red from 'material-ui/colors/red';
import {subscribeToPull, unsubscribeToPull} from '../thunks/chatThunks';
import {isConnected} from '../selectors/chatSelectors';
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

const mapStateToProps = (state) => ({
    connected: isConnected(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    subscribeToPull,
    unsubscribeToPull,
}, dispatch);

class ChatContainer extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        connected: PropTypes.bool,
        subscribeToPull: PropTypes.func,
        unsubscribeToPull: PropTypes.func,
    };

    componentDidMount() {
        this.props.subscribeToPull();
    }

    componentWillUnmount() {
        this.props.unsubscribeToPull();
    }

    render() {
        const {classes, connected} = this.props;

        return (
            <div className={classes.root}>
                {!connected ? (<ChipConnection classes={classes}/>) : null}
                <ChatListContainer/>
                <ChatInputContainer/>
            </div>
        );
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ChatContainer));