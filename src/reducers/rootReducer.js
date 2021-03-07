import characterReducer from './characterReducer';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    characters: characterReducer,
    myCounter: counterReducer,
    todos:todoReducer
})

export default rootReducer