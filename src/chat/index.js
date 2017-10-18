import View from './containers/ChatContainer';
import ChatMessageStore from './stores/ChatMessageStore';
import ChatSocket from './api/chatWebsocket';

const socket = new ChatSocket(process.env.REACT_APP_BACKEND_HOST);
const store = new ChatMessageStore(socket);

export {
    View,
    store,
};