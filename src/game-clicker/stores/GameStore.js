import {extendObservable} from 'mobx';
import GameModel from '../models/GameModel';

class GameStore {
    list;

    constructor() {
        extendObservable(this, {
            list: [],
        });
    }

    add(name, count){
        this.list.push(new GameModel(name, count));
    }
}

export default GameStore;