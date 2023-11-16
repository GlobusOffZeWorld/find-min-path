import { createSlice } from '@reduxjs/toolkit';

import { InfoStateType } from '@/types';

const initialState: InfoStateType = {
  time: 0,
  error: ''
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setTime: (state, { payload: { time } }) => {
      state.time = time;
    },
    setError: (state, { payload: { error } }) => {
      state.error = error;
    }
  }
});

export const { setTime, setError } = infoSlice.actions;
export default infoSlice.reducer;
