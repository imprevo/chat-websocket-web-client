import {combineReducers} from 'redux';
import {configureStore} from './utils/redux';
import {reducer as chat} from 'chat';

const rootReducer = combineReducers({
    chat,
});
const isProduction = 'production' === process.env.NODE_ENV;
const store = configureStore(!isProduction, rootReducer);

export default store;

