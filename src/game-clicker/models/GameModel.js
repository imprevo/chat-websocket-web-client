import {extendObservable} from 'mobx';

class GameModel {
    count;

    constructor(startWith = 0) {
        extendObservable(this, {
            count: startWith,
        });
    }

    increase() {
        this.count++;
    }
}

export default GameModel;