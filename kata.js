function sudoku(puzzle) {
  // 🕵️ Step 1: Find Empty Cell Locator
  // Scans the entire 9x9 grid to find the first unoccupied cell (value 0)
  function findEmptyCell(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          return [row, col]; // Return coordinates of empty cell
        }
      }
    }
    return null; // Puzzle is complete when no empty cells exist
  }

  // 🧩 Step 2: Validity Checker
  // Validates if a number can be placed in a specific cell without violating Sudoku rules
  function isValid(board, num, pos) {
    const [row, col] = pos;

    // 📍 Rule 1: No duplicate in same row
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num && col !== i) {
        return false;
      }
    }

    // 📍 Rule 2: No duplicate in same column
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num && row !== i) {
        return false;
      }
    }

    // 📍 Rule 3: No duplicate in 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num && (i !== row || j !== col)) {
          return false;
        }
      }
    }

    return true; // Number is valid in this position
  }

  // 🔍 Step 3: Recursive Backtracking Solver
  // Uses depth-first search with backtracking to solve the Sudoku puzzle
  function solve(board) {
    // Find next empty cell
    const emptyCell = findEmptyCell(board);

    // Base case: No empty cells means puzzle is solved
    if (!emptyCell) {
      return true;
    }

    const [row, col] = emptyCell;

    // Try numbers 1-9 in the empty cell
    for (let num = 1; num <= 9; num++) {
      // Check if number is valid in current position
      if (isValid(board, num, [row, col])) {
        // Place the number
        board[row][col] = num;

        // Recursive call: If this leads to a solution, return true
        if (solve(board)) {
          return true;
        }

        // 🔙 Backtrack: Reset cell if no solution found
        board[row][col] = 0;
      }
    }

    // No solution exists for this configuration
    return false;
  }

  // 🧠 Step 4: Solution Execution
  // Create a deep copy of the puzzle to avoid modifying original
  const solvedPuzzle = puzzle.map((row) => [...row]);

  // Solve the puzzle in-place
  solve(solvedPuzzle);

  return solvedPuzzle;
}

// 🧪 Test Scenarios
const puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

console.log(sudoku(puzzle));
