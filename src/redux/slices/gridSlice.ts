import { createSlice, current } from '@reduxjs/toolkit';

interface GridState {
  matrix: number[][];
}

const initialState: GridState = {
  matrix: new Array(10).fill(new Array(10).fill(0))
};

export const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    setCell: (state, { payload: { row, column, value } }) => {
      state.matrix[row][column] = value;
      console.log(current(state.matrix));
    },
    clearMatrix: state => {
      state.matrix = state.matrix.map(row => row.map(() => 0));
    }
  }
});

export const { setCell, clearMatrix } = gridSlice.actions;

export default gridSlice.reducer;
