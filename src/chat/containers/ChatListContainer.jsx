import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getChatMessages} from '../selectors/chatSelectors';

const mapStateToProps = (state) => ({
    messages: getChatMessages(state),
});

class ChatListContainer extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape({
                message: PropTypes.string,
            })
        ),
    };

    render() {
        const {messages} = this.props;
        return (
            <div>
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

export default connect(mapStateToProps)(ChatListContainer);