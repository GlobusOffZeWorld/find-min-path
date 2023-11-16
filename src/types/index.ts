export type Cell = [number, number];

export type CellProps = {
  row: number;
  col: number;
};

export interface GridStateType {
  matrix: number[][];
}

export interface PathStateType {
  path: number[][];
  start: Cell | null;
  end: Cell | null;
}

export interface InfoStateType {
  time: number;
  error: string;
}

export enum CellType {
  empty = 0,
  wall = 1,
  path = 2,
  start = 3,
  end = 4
}
