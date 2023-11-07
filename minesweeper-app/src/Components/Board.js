import { useEffect, useState } from "react";

const Board = () => {
  const [grid, setGrid] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    freshBoard();
  }, []);

  const freshBoard = () => {
    const boardHeight = 10;
    const boardWidth = 10;
    const mineCount = 15;

    const newGrid = blankBoard(boardHeight, boardHeight, mineCount);
    setGrid(newGrid);
    setGameOver(false);
  };

  const blankBoard = (height, width, mines) => {
    const grid = [];

    for (let i=0; i<height; i++) {
        const row = [];
        for (let j=0; j<width; j++) {
            row.push({
                isMine: false,
                isRevealed:false, 
                adjacementMines:0,
            })
        }
        grid.push(row)
    }
    return grid;
  }

  return (
    <div className="board">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, columnIndex) => (
            <div
              key={columnIndex}
              className="cell"
            >
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Board;