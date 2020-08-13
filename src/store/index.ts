
import {createStore, Store} from 'redux';
import rootReducer, { RootState } from './ducks/rootReducer';



const store :Store<RootState> = createStore(rootReducer);
export default store;

