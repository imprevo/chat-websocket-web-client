import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {subscribeToPull, unsubscribeToPull} from '../thunks/chatThunks';
import {isConnected} from '../selectors/chatSelectors';
import ChatListContainer from './ChatListContainer';
import ChatInputContainer from './ChatInputContainer';

const mapStateToProps = (state) => ({
    connected: isConnected(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    subscribeToPull,
    unsubscribeToPull,
}, dispatch);

class ChatContainer extends Component {
    static propTypes = {
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
        const {connected} = this.props;

        return (
            <div>
                <h3>{connected ? 'on' : 'off'}</h3>
                <ChatInputContainer/>
                <ChatListContainer/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);