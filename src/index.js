import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {Layout, store} from 'app';
import {View as ChatView} from 'chat';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

function renderRoot(Root, rootStore) {
    ReactDOM.render(
        <Provider store={rootStore}>
            <MuiThemeProvider theme={theme}>
                <Layout>
                    <Root/>
                </Layout>
            </MuiThemeProvider>
        </Provider>
        , document.getElementById('root'));
}

renderRoot(ChatView, store);
