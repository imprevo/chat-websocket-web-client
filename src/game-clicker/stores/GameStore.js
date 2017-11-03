import {extendObservable} from 'mobx';
import GameModel from '../models/GameModel';

class GameStore {
    data;

    constructor() {
        extendObservable(this, {
            data: [],
        });
    }

    add(startWith){
        this.data.push(new GameModel(startWith));
    }
}

export default GameStore;