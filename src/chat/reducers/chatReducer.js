import {chatTypes} from '../constants/chatTypes';

const initialState = {
    connected: false,
    messages: [
        {
            message: 'Hello world',
        },
    ],
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case chatTypes.CHAT_PULL:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload,
                ],
            };

        case chatTypes.CHAT_CONNECT:
            return {
                ...state,
                connected: true,
            };

        case chatTypes.CHAT_DISCONNECT:
            return {
                ...state,
                connected: false,
            };

        default:
            return state;
    }
}

export default reducer;