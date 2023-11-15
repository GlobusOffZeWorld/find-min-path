import { combineReducers } from '@reduxjs/toolkit';

import gridReducer from './slices/gridSlice';

const rootReducer = combineReducers({
  grid: gridReducer
});

export default rootReducer;
