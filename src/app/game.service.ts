import { Injectable } from '@angular/core';
import { Player } from './player';
import { Block } from './block';

@Injectable()
export class GameService {

	players = []
	turn: number = 0; // By Default First Player turn is First
	message: string = "";
	blocks = [];
	freeBlocksRemaining = 9;

	constructor() {
		this.initBlocks();
		this.initPlayers();
	}

	initBlocks() {
		this.blocks = [];
		for (var i = 1; i <= 9; ++i) {
			var block = new Block();
			block.free = true;
			block.value = "";
			block.symbol = "";
			this.blocks.push(block);
		}
	}

	initPlayers() {
		var player1 = new Player("Player 1");
		var player2 = new Player("Player 2");
		this.players.push(player1);
		this.players.push(player2);
		this.message = player1.name + ' turn'
	}

	changeTurn() {
		this.turn = (this.turn === 1 ? 0 : 1)
		return this.turn;
	}

	anyoneWins() {
		console.log(this.blocks)
		var filledBlocks = this.blocks
			.map((b, i) => ({ block: b.value, position: i, free: b.free }))
			.filter(b => !b.free);
		return (this.doesPlayerWins('circle', filledBlocks) || this.doesPlayerWins('cross', filledBlocks));
	}

	doesPlayerWins(value, blocks) {
		const WINNING_COMBINATION = [
			[0, 1, 2], // line 1
			[3, 4, 5], // line 2
			[6, 7, 8], // line 3
			[0, 3, 6], // column 1
			[1, 4, 7], // column 2
			[2, 5, 8], // column 3
			[0, 4, 8], // lrt
			[2, 4, 6] // rtl
		]

		var takenPositions = blocks.filter(b => b.block == value).map(b => b.position)
		for(var i = 0; i < WINNING_COMBINATION.length; i++) {
			var diff = WINNING_COMBINATION[i].filter(x => takenPositions.indexOf(x) < 0);
			if (diff.length === 0) return true;
		}
		return false;
	}

}
