import { combineReducers } from '@reduxjs/toolkit';

import gridReducer from './slices/gridSlice';
import pathReducer from './slices/pathSlice';

const rootReducer = combineReducers({
  grid: gridReducer,
  path: pathReducer
});

export default rootReducer;
