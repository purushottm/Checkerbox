import React from "react";
import { Container, Title } from "../styles/styled";
import { BoardControls } from "./BoardControls";
import { BoardGrid } from "./BoardGrid";
import { useCheckerBoard } from "../hooks/useCheckerBoard";
import { BOARD_CONFIG } from "../constants";

const CheckerboardApp: React.FC = () => {
  const { DEFAULT_SIZE } = BOARD_CONFIG;
  const {
    board,
    boardSize,
    maxClicks,
    handleSquareClick,
    handleBoardSizeChange,
  } = useCheckerBoard({
    initialSize: DEFAULT_SIZE,
  });

  return (
    <Container>
      <Title>Checkerboard For Hasura(By Puru) </Title>
      <BoardControls
        boardSize={boardSize}
        maxClicks={maxClicks}
        onBoardSizeChange={handleBoardSizeChange}
      />
      <BoardGrid
        board={board}
        size={boardSize}
        onSquareClick={handleSquareClick}
      />
    </Container>
  );
};

export default CheckerboardApp;
