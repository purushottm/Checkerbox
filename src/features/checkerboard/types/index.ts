export type Square = {
  count: number;
  isBlack: boolean;
};

export type BoardState = Square[][];

export type UseCheckerboardProps = {
  initialSize: number;
  minSize?: number;
  maxSize?: number;
};

export type UseCheckerboardReturn = {
  board: BoardState;
  boardSize: number;
  maxClicks: number;
  handleSquareClick: (row: number, col: number) => void;
  handleBoardSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
