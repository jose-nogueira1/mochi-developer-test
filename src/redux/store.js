import { createStore } from 'redux';
import { primaryReducer } from './reducers';


export default createStore(primaryReducer,window.STATE_FROM_SERVER);

