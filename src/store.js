import home from './page/home/reducer';
import { combineReducers, createStore } from 'redux';
import { KEY_STORE } from './common/constants';

const rootReducer = combineReducers({ home });
const storedState = JSON.parse(localStorage.getItem(KEY_STORE)) || {};
const store = createStore(rootReducer, storedState);

store.subscribe(() => {
  localStorage.setItem(KEY_STORE, JSON.stringify(store.getState()));
});

export default store;
