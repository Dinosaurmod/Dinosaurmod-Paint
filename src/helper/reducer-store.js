import {createStore} from 'redux';
import rootReducer from '../reducers/scratch-paint-reducer';

const store = createStore(rootReducer);

window._store = store;

console.log(window._store)

export default store;
