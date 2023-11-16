import { createSlice } from '@reduxjs/toolkit';

import { FIELD_SIZE } from '@/constants';

interface GridState {
  matrix: number[][];
}

const initialState: GridState = {
  matrix: new Array(FIELD_SIZE).fill(new Array(FIELD_SIZE).fill(0))
};

export const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    setCell: (state, { payload: { row, column, value } }) => {
      state.matrix[row][column] = value;
    },
    setGrid: (state, { payload: { pathMatrix } }) => {
      state.matrix = pathMatrix.map((row: number[]) => row.map(column => column));
    },
    clearGrid: state => {
      state.matrix = state.matrix.map(row => row.map(() => 0));
    }
  }
});

export const { setCell, clearGrid, setGrid } = gridSlice.actions;

export default gridSlice.reducer;
