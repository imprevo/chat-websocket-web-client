import React from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {Layout} from 'app';
import {store, View} from 'chat';

store.addMessage({message: 'Hello world!'});

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

function renderRoot(Root, rootStore) {
    ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <Layout>
                <Root store={rootStore}/>
            </Layout>
        </MuiThemeProvider>
        , document.getElementById('root'));
}

renderRoot(View, store);
