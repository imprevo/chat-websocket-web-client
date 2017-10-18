import View from './containers/ChatContainer';
import reducer from './reducers/chatReducer';
import Store from './stores/ChatMessageStore';
import ChatSocket from './api/chatWebsocket';

const socket = new ChatSocket(process.env.REACT_APP_BACKEND_HOST);
const store = new Store(socket);

export {
    reducer,
    View,
    store,
};