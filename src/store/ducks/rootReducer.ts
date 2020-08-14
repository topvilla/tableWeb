import {boardReducer} from './board';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  board: boardReducer,
  
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;