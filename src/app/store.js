import {combineReducers} from 'redux';
import {configureStore} from './utils/redux';
import chat from '../chat/reducers/chatReducer';

const rootReducer = combineReducers({
    chat,
});
const isProduction = 'production' === process.env.NODE_ENV;
const store = configureStore(!isProduction, rootReducer);

export default store;

