import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'app/store';
import 'app/style/global.css';
import ChatContainer from 'chat/containers/ChatContainer';

function renderRoot(Root, rootStore) {
    ReactDOM.render(
        <Provider store={rootStore}>
            <Root/>
        </Provider>
        , document.getElementById('root'));
}

renderRoot(ChatContainer, store);
