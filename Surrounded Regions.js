var solve = function(board) {
    const loop = modeFlag => {
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if(board[i][j] !== 'X') {
                    process(modeFlag, i, j, board);
                }
            }
        }
        return modeFlag ? false : board;
    }
    return loop(loop(true));
};
const process = (mode, i, j, board) => {
    if(mode) {
        if(!i|| !j || i === board.length - 1 || j === board[0].length - 1) {
            traversal(board, i, j);
        }
    } else {
        board[i][j] === '#' ? board[i][j] = 'O' : board[i][j] = 'X'
    }
};
const traversal = (board, i, j) => {
    const validate = (row, col) => row >= 0 && col >= 0 && row < board.length && col < board[0].length;
    const directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];
    const dfs = (x, y) => {
        board[x][y] = '#';
        for(const [dx, dy] of directions) {
            const row = x + dx; 
            const col = y + dy;
            if(validate(row, col) && board[row][col] === 'O') {
                dfs(row, col);
            }
        }
    }
    dfs(i, j);
};
