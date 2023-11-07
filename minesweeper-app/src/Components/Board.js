import { useEffect, useState } from "react";

const Board = () => {
  const [grid, setGrid] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setGrid(createEmptyBoard(10,10))
  }, []);

  
  function getValue() {

  }

  function handleClick() {
  
  }

  function createEmptyBoard(rows, cols) {
    const board = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push({
          row: i,
          col: j,
          isMine: false,
          isRevealed: false,
        });
      }
      board.push(row);
    }
    return board;
  }

  function renderBoard() {
    return grid.map((row, rowIndex) => (
      <div key={rowIndex}>
        {row.map((cell) => (
          <div
            key={`${cell.row}-${cell.col}`}
            className={`cell ${cell.isRevealed ? 'revealed' : ''}`}
            onClick={() => handleClick(cell)}
          >
            {cell.isRevealed ? getValue(cell) : null}
          </div>
        ))}
      </div>
    ));
  }
  return (
    <div>
      <h1>Minesweeper</h1>
      <div className="board">{renderBoard()}</div>
    </div>
  );
}

export default Board;