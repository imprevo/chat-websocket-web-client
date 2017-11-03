import React from 'react';
import {Provider} from 'mobx-react';
import GameContainer from './containers/GameContainer';
import GameStore from './stores/GameStore';

const gameStore = new GameStore();
gameStore.add('Cursor', 7);
gameStore.add('Grandma', 99);
gameStore.add('Portal', 20);

const View = () => (
    <Provider gameStore={gameStore}>
        <GameContainer />
    </Provider>
);

export {
    View,
};