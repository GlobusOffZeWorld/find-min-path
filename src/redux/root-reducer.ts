import { combineReducers } from '@reduxjs/toolkit';

import gridReducer from './slices/gridSlice';
import infoReducer from './slices/infoSlice';
import pathReducer from './slices/pathSlice';

const rootReducer = combineReducers({
  grid: gridReducer,
  path: pathReducer,
  info: infoReducer
});

export default rootReducer;
