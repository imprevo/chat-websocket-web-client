import {pull, connect, disconnect} from '../actions/chatActions';
import ChatSocket from '../api/chatWebsocket';

const socket = new ChatSocket(process.env.REACT_APP_BACKEND_HOST);

function subscribeToPull() {
    return (dispatch) => {
        socket.connect();
        socket.subscribeToConnect(() => dispatch(connect()));
        socket.subscribeToDisconnect(() => dispatch(disconnect()));
        socket.subscribeToChatMessage((message) => dispatch(pull(message)));
    }
}

function unsubscribeToPull() {
    return (dispatch) => {
        socket.unsubscribeToChatMessage();
        socket.unsubscribeToConnect();
        socket.unsubscribeToDisconnect();
        socket.disconnect();
        dispatch(disconnect());
    }
}

function pushMessage(message) {
    return (dispatch) => {
        socket.pushChatMessage(message);
    }
}

export {
    subscribeToPull,
    unsubscribeToPull,
    pushMessage,
}