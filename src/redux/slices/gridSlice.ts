import { createSlice } from '@reduxjs/toolkit';

import { FIELD_SIZE } from '@/constants';
import { GridStateType } from '@/types';

const initialState: GridStateType = {
  matrix: new Array(FIELD_SIZE).fill(new Array(FIELD_SIZE).fill(0))
};

export const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    setCell: (state, { payload: { row, col, value } }) => {
      state.matrix[row][col] = value;
    },
    setGrid: (state, { payload: { pathMatrix } }) => {
      state.matrix = pathMatrix.map((row: number[]) => row.map(col => col));
    },
    clearGrid: state => {
      state.matrix = state.matrix.map(row => row.map(() => 0));
    }
  }
});

export const { setCell, clearGrid, setGrid } = gridSlice.actions;

export default gridSlice.reducer;
