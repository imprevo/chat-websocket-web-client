import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {getChatMessages} from '../selectors/chatSelectors';

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
    }
});

const mapStateToProps = (state) => ({
    messages: getChatMessages(state),
});

class ChatListContainer extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        messages: PropTypes.arrayOf(
            PropTypes.shape({
                message: PropTypes.string,
            })
        ),
    };

    render() {
        const {classes, messages} = this.props;

        return (
            <div className={classes.root}>
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

export default withStyles(styles)(connect(mapStateToProps)(ChatListContainer));