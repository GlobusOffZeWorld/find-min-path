import { createSlice } from '@reduxjs/toolkit';

import { FIELD_SIZE } from '@/constants';

interface PathType {
  path: number[][];
  start: [number, number] | null;
  end: [number, number] | null;
}

const initialState: PathType = {
  path: new Array(FIELD_SIZE).fill(new Array(FIELD_SIZE).fill(0)),
  start: null,
  end: null
};

export const pathSlice = createSlice({
  name: 'path',
  initialState,
  reducers: {
    setPath: (state, { payload: { pathMatrix } }) => {
      state.path = pathMatrix.map((row: number[]) => row.map(column => column));
    },
    clearPath: state => {
      state.path = state.path.map(row => row.map(() => 0));
    },
    setStart: (state, { payload: { cell } }) => {
      state.start = cell;
    },
    setEnd: (state, { payload: { cell } }) => {
      state.end = cell;
    }
  }
});

export const { setPath, clearPath, setStart, setEnd } = pathSlice.actions;

export default pathSlice.reducer;
