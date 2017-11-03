import React from 'react';
import {Provider} from 'mobx-react';
import GameContainer from './containers/GameContainer';
import GameStore from './stores/GameStore';

const gameStore = new GameStore();
gameStore.add(7);
gameStore.add(99);

const View = () => (
    <Provider gameStore={gameStore}>
        <GameContainer />
    </Provider>
);

export {
    View,
};