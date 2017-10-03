import openSocket from 'socket.io-client';

class ChatSocket {
    constructor(base = '/') {
        this._base = base;
        this.socket = null;
    }

    connect() {
        if (this.socket) {
            this.socket.connect();
        } else {
            this.socket = openSocket(this._base);
        }
    }

    disconnect() {
        if (this.socket){
            this.socket.disconnect();
        }
    }

    subscribeToConnect(cb) {
        this.socket.on('connect', (response) => cb(response));
    }

    unsubscribeToConnect(cb) {
        this.socket.off('connect', (response) => cb(response));
    }

    subscribeToDisconnect(cb) {
        this.socket.on('disconnect', (response) => cb(response));
    }

    unsubscribeToDisconnect(cb) {
        this.socket.off('disconnect', (response) => cb(response));
    }

    subscribeToChatMessage(cb) {
        this.socket.on('pullChatMessage', (response) => cb(response));
    }

    unsubscribeToChatMessage(cb) {
        this.socket.off('pullChatMessage', (response) => cb(response));
    }

    pushChatMessage(message) {
        this.socket.emit('pushChatMessage', message);
    }
}

export default ChatSocket;