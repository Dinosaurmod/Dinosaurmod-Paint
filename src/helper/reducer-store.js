import {createStore} from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

window._store = store;

export default store;
