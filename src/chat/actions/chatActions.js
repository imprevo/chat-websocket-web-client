import {chatTypes} from '../constants/chatTypes';

function pull (message) {
    return {
        type: chatTypes.CHAT_PULL,
        payload: message,
    };
}

function push (message) {
    return {
        type: chatTypes.CHAT_PUSH,
        payload: message,
    };
}

function connect () {
    return {
        type: chatTypes.CHAT_CONNECT,
    };
}

function disconnect () {
    return {
        type: chatTypes.CHAT_DISCONNECT,
    };
}

export {
    pull,
    push,
    connect,
    disconnect,
}