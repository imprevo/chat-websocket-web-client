import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'mobx-react';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {Layout} from 'app';
import {store as chatStore} from 'chat';
import Routes from './routes';

chatStore.addMessage({message: 'Hello world!'});

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

function renderRoot(Root, stores) {
    ReactDOM.render(
        <Provider {...stores}>
            <Router>
                <MuiThemeProvider theme={theme}>
                    <Layout>
                        <Root/>
                    </Layout>
                </MuiThemeProvider>
            </Router>
        </Provider>
        , document.getElementById('root')
    );
}

renderRoot(Routes, {
    chatStore,
});
