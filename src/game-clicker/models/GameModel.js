import {extendObservable} from 'mobx';

class GameModel {
    name;
    count;

    constructor(name, count = 0) {
        extendObservable(this, {
            name,
            count,
        });
    }

    increase() {
        this.count++;
    }
}

export default GameModel;