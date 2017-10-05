import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {pushMessage} from '../thunks/chatThunks';

const mapDispatchToProps = (dispatch) => bindActionCreators({
    pushMessage,
}, dispatch);

class ChatInputContainer extends Component {
    static propTypes = {
        pushMessage: PropTypes.func,
    };

    state = {
        message: '',
    };

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
        return (
            <div>
                <form onSubmit={this.sendMessage}>
                    <input type="text" onChange={this.onChange}/>
                    <button>send</button>
                </form>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(ChatInputContainer);