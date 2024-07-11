type Move = "X" | "O" | ""
type Board = Move[][]

const checkWinner = (board: Board): Move => {
	const bsize: number = board.length
	const lastBox: number = bsize - 1

	// check corners
	if (board[0][0] !== "" && board[0][0] === board[0][lastBox] && board[0][0] === board[lastBox][0] && board[0][0] === board[lastBox][lastBox]) {
		return board[0][0]
	}

	// check primary diagonal
	let ct: number = 0
	for (let i = 0; i < lastBox; i++) {
		if (board[i][i] === board[i+1][i+1]) {
			ct++
		}
	}
	if (board[0][0] !== "" && ct === lastBox) {
		return board[0][0]
	}

	// check secondary diagonal
	ct = 0
	for (let i = 0; i < lastBox; i++) {
		if (board[i][lastBox-i] === board[i+1][lastBox-i-1]) {
			ct++
		}
	}
	if (board[0][lastBox] !== "" && ct === lastBox) {
		return board[0][lastBox]
	}

	// check horizontal
	ct = 0

	for (let i = 0; i < bsize; i++) {
		for (let j = 0; j < lastBox; j++) {
			if (board[i][j] === board[i][j+1]) {
				ct++
			}	
		}
		if (board[i][0] !== "" && ct === lastBox) {
			return board[i][0]
		}
		ct = 0
	}

	// check vertical	
	ct = 0
	for (let i = 0; i < bsize; i++) {
		for (let j = 0; j < lastBox; j++) {
			if (board[j][i] == board[j+1][i]) {
				ct++
			}
		}
		if (board[0][i] !== "" && ct === lastBox) {
			return board[0][i]
		}
		ct = 0
	}

	// check for 2x2
	for (let i = 0; i < lastBox; i++) {
		for (let j = 0; j < lastBox; j++) {
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
