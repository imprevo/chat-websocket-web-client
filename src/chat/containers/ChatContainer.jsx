import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {subscribeToPull, unsubscribeToPull, pushMessage} from '../thunks/chatThunks';
import {getChatMessages, isConnected} from '../selectors/chatSelectors';

const mapStateToProps = (state) => {
    return {
        messages: getChatMessages(state),
        connected: isConnected(state,)
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    subscribeToPull,
    unsubscribeToPull,
    pushMessage,
}, dispatch);

class ChatContainer extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape({
                message: PropTypes.string,
            })
        ),
        connected: PropTypes.bool,
        subscribeToPull: PropTypes.func,
        unsubscribeToPull: PropTypes.func,
        pushMessage: PropTypes.func,
    };

    state = {
        message: '',
    };

    componentDidMount() {
        this.props.subscribeToPull();
    }

    componentWillUnmount() {
        this.props.unsubscribeToPull();
    }

    onChange = (e) => {
        this.setState({
            message: e.target.value,
        });
    };

    sendMessage = (e) => {
        e.preventDefault();

        this.props.pushMessage(this.state.message);
    };

    render() {
        const {messages, connected} = this.props;
        return (
            <div>
                <h3>{connected ? 'on' : 'off'}</h3>
                <form onSubmit={this.sendMessage}>
                    <input type="text" onChange={this.onChange}/>
                    <button>send</button>
                </form>
                {messages.map((msg, key) => {
                    return (
                        <p key={key}>
                            #{key}: {msg.message}
                        </p>
                    );
                })}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);