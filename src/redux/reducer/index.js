import { combineReducers } from 'redux';
import curCity from './curCity';
import searchCity from './searchCity';

export default combineReducers({
    curCity,
    searchCity,
});
