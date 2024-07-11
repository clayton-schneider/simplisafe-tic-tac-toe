import { expect, test } from "vitest";
import { anyMovesLeft, checkWinner, isGameOver } from "./ttt";

test('finds 4 corners', () => {
	const board = [
		["X", "O", "O", "X"],
		["O", "O", "O", "O"],
		["O", "O", "O", "O"],
		["X", "O", "O", "X"]
	]
	expect(checkWinner(board)).toBe("X")
})


test('finds primary diag', () => {
	const board = [
		["X", "O", "O", "O"],
		["O", "X", "O", "O"],
		["O", "O", "X", "O"],
		["O", "O", "O", "X"]
	]
	expect(checkWinner(board)).toBe("X")
})


test('finds second diag', () => {
	const board = [
		["X", "O", "O", "X"],
		["O", "0", "X", "O"],
		["O", "X", "O", "O"],
		["X", "O", "O", "O"]
	]
	expect(checkWinner(board)).toBe("X")
})


test('finds all horizontal', () => {
	let ct = 0
	for (let i = 0; i < 4; i++) {
		const board = [
			["", "", "", ""],
			["", "", "", ""],
			["", "", "", ""],
			["", "", "", ""]
		]
		for (let j = 0; j < 4; j++) {
			board[i][j] = "X"
		}
		if (checkWinner(board) === "X") {
			ct++
		}
	}
	expect(ct).toBe(4)
})

test('finds all vertical', () => {
	let ct = 0
	for (let i = 0; i < 4; i++) {
		const board = [
			["", "", "", ""],
			["", "", "", ""],
			["", "", "", ""],
			["", "", "", ""]
		]
		for (let j = 0; j < 4; j++) {
			board[j][i] = "X"
		}
		if (checkWinner(board) === "X") {
			ct++
		}
	}
	expect(ct).toBe(4)
})


test('finds all 2x2', () => {
	let ct = 0
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			const board = [
				["", "", "", ""],
				["", "", "", ""],
				["", "", "", ""],
				["", "", "", ""]
			]
			board[i][j] = "X"
			board[i + 1][j] = "X"
			board[i][j + 1] = "X"
			board[i + 1][j + 1] = "X"
			if (checkWinner(board) === "X") {
				ct++
			}
		}
	}
	expect(ct).toBe(9)
})

test("finds no winner", () => {
	const board = [
		["X", "O", "X", "O"],
		["X", "O", "X", "O",],
		["O", "X", "O", "X"],
		["O", "X", "X", "X"]
	]
	expect(checkWinner(board)).toBe("")
})

test("finds no moves left", () => {
	const board = [
		["X", "O", "X", "O"],
		["X", "O", "X", "O",],
		["O", "X", "O", "X"],
		["O", "X", "X", "X"]
	]
	expect(anyMovesLeft(board)).toBe(false)
})

test("finds moves left", () => {
	const board = [
		["X", "", "X", "O"],
		["X", "O", "X", "O",],
		["O", "X", "O", "X"],
		["O", "X", "X", "X"]
	]
	expect(anyMovesLeft(board)).toBe(true)
})

test("game over with winner", () => {
	const board = [
		["O", "X", "X", "O"],
		["X", "O", "O", "O",],
		["O", "X", "O", "X"],
		["O", "X", "O", "O"]
	]

	expect(isGameOver(board)).toBe(true)
})
