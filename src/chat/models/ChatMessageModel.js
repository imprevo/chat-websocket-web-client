// import {extendObservable} from 'mobx';

class TodoModel {
    message;

    constructor({message}) {
        this.message = message;
        // extendObservable(this, {
        //     message,
        // });
    }
}

export default TodoModel;