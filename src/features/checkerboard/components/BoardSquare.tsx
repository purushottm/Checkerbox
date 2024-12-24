import React from "react";
import { SquareButton } from "../styles/styled";
import { Square } from "../types";

type BoardSquareProps = Square & {
  onClick: () => void;
};

export const BoardSquare: React.FC<BoardSquareProps> = ({
  count,
  onClick,
  isBlack = false,
}) => (
  <SquareButton isblack={isBlack} onClick={onClick}>
    {count}
  </SquareButton>
);
