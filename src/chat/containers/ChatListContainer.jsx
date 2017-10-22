import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer, PropTypes as MobxPropTypes} from 'mobx-react';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const calculationError = 1;

const styles = (theme) => ({
    root: {
        width: '100%',
        flex: 'auto',
        overflowY: 'auto',
        height: 0,
        background: theme.palette.background.paper,
        marginBottom: theme.spacing.unit * 2,
    },
    avatar: {
        width: 32,
        height: 32,
    },
});

class ChatListContainer extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        messages: MobxPropTypes.observableArrayOf(
            PropTypes.shape({
                message: PropTypes.string,
            })
        ),
    };

    refScrollArea = null;

    wasUserScroll = false;

    setRefScrollArea = (ref) => {
        this.refScrollArea = ref;
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate(prevProps) {
        if (!this.wasUserScroll && this.props.messages.length !== prevProps.messages.length) {
            this.scrollToBottom();
        }
    }

    onScroll = () => {
        const scrollBottom = this.refScrollArea.scrollTop + this.refScrollArea.offsetHeight;

        // if scroll area is scrolled to the bottom
        // set wasUserScroll to false
        this.wasUserScroll = scrollBottom + calculationError < this.refScrollArea.scrollHeight;
    };

    scrollToBottom() {
        this.refScrollArea.scrollTop = this.refScrollArea.scrollHeight;
    }

    render() {
        const {classes, messages} = this.props;

        return (
            <div className={classes.root} ref={this.setRefScrollArea} onScroll={this.onScroll}>
                <List>
                    {messages.map((msg, key) => (
                        <ListItem key={key} dense>
                            <Avatar className={classes.avatar}>
                                {key.toString()}
                            </Avatar>
                            <ListItemText primary={msg.message}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(observer(ChatListContainer));