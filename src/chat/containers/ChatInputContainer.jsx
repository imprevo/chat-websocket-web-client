import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
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
            <form onSubmit={this.sendMessage}>
                <Input type="text" placeholder="Enter message" onChange={this.onChange}/>
                <Button raised color="primary">
                    Send
                </Button>
            </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(ChatInputContainer);