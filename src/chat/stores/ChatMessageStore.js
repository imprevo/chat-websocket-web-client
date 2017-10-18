import {extendObservable} from 'mobx';
import ChatMessageModel from '../models/ChatMessageModel';

class ChatMessageStore {
    _socket;

    connected;

    messages;

    constructor(socket) {
        this._socket = socket;

        extendObservable(this, {
            connected: false,
            messages: [],
        });
    }

    _setConnect = () => {
        this.connected = true;
    };

    _setDisconnect = () => {
        this.connected = false;
    };

    subscribeToPull() {
        this._socket.connect();
        this._socket.subscribeToConnect(this._setConnect);
        this._socket.subscribeToDisconnect(this._setDisconnect);
        this._socket.subscribeToChatMessage(this.addMessage);
    }

    unsubscribeToPull() {
        this._socket.unsubscribeToChatMessage();
        this._socket.unsubscribeToConnect();
        this._socket.unsubscribeToDisconnect();
        this._socket.disconnect();
        this._setDisconnect();
    }

    pushMessage(message) {
        this._socket.pushChatMessage(message);
    }

    addMessage = (message) => {
        this.messages.push(new ChatMessageModel(message));
    };
}

export default ChatMessageStore;