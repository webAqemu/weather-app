import { applyMiddleware, createStore } from 'redux';
import api from './middleware/api';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(api));

export default store;
