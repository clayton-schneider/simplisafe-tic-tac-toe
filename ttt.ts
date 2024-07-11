type Move = "X" | "O" | ""
type Board = Move[][]

const checkWinner = (board: Board): Move => {
	const bsize = board.length

	// check corners
	if (board[0][0] !== "" && board[0][0] === board[0][bsize - 1] && board[0][0] === board[bsize-1][0] && board[0][0] === board[bsize-1][bsize-1]) {
		return board[0][0]
	}

	// check primary diagonal
	let ct = 0
	for (let i = 0; i < bsize-1; i++) {
		if (board[i][i] === board[i+1][i+1]) {
			ct++
		}
	}
	if (board[0][0] !== "" && ct === bsize-1) {
		return board[0][0]
	}

	// check secondary diagonal
	ct = 0
	for (let i = 0; i < bsize-1; i++) {
		if (board[i][bsize-1-i] === board[i+1][bsize-1-i-1]) {
			ct++
		}
	}
	if (board[0][bsize-1] !== "" && ct === bsize-1) {
		return board[0][bsize-1]
	}

	// check horizontal
	ct = 0

	for (let i = 0; i < bsize; i++) {
		for (let j = 0; j < bsize-1; j++) {
			if (board[i][j] === board[i][j+1]) {
				ct++
			}	
		}
		if (board[i][0] !== "" && ct === bsize-1) {
			return board[i][0]
		}
		ct = 0
	}

	// check vertical	
	ct = 0
	for (let i = 0; i < bsize; i++) {
		for (let j = 0; j < bsize-1; j++) {
			if (board[j][i] == board[j+1][i]) {
				ct++
			}
		}
		if (board[0][i] !== "" && ct === bsize-1) {
			return board[0][i]
		}
		ct = 0
	}

	// check for 2x2
	for (let i = 0; i < bsize-1; i++) {
		for (let j = 0; j < bsize-1; j++) {
			if (board[i][j] === "") continue

			if (board[i][j] === board[i+1][j] && board[i][j] === board[i][j+1] && board[i][j] === board[i+1][j+1]) {
				return board[i][j]
			}	
		}
	}
	
	return ""
}

const anyMovesLeft = (board: Board): boolean => {
	return board.some(row => row.some(spot => spot === ""))
	
}

const isGameOver = (board: Board): boolean => {
	if (checkWinner(board) !== "" || !anyMovesLeft(board)) return true
	return false
}

export { checkWinner, anyMovesLeft, isGameOver }
