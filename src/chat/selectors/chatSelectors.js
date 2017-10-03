function getChatMessages(state) {
    return state.chat.messages;
}

function isConnected(state) {
    return state.chat.connected;
}

export {
    getChatMessages,
    isConnected,
}