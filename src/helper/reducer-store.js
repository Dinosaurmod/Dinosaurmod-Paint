import {createStore} from 'redux';
import rootReducer from '../reducers/scratch-paint-reducer';

const store = createStore(rootReducer);

window._store = store;

export default store;
