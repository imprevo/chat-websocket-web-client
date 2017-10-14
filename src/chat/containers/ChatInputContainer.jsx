import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import {pushMessage} from '../thunks/chatThunks';

const styles = (theme) => ({
    root: {
        width: '100%',
        background: theme.palette.background.paper,
    },
    avatar: {
        width: 32,
        height: 32,
    },
    form: {
        display: 'flex',
    },
    input: {
        flex: 'auto',
    },
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    pushMessage,
}, dispatch);

class ChatInputContainer extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
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
        const {classes} = this.props;
        return (
            <form className={classes.form} onSubmit={this.sendMessage}>
                <Input className={classes.input} type="text" placeholder="Enter message" onChange={this.onChange}/>
                <Button raised color="primary">
                    Send
                </Button>
            </form>
        );
    }
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(ChatInputContainer));