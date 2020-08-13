import {canvasReducer} from './canvas';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  canvas: canvasReducer,
  
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;