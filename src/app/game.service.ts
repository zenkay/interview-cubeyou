import { Injectable } from '@angular/core';
import { Player } from './player';
import { Block } from './block';

@Injectable()
export class GameService {

	players = []
	turn: number = 0; // By Default First Player turn is First
	draw: number = 0;

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
		var player1 = new Player();
		var player2 = new Player();
		this.players.push(player1);
		this.players.push(player2);
	}

	changeTurn() {
		this.turn = (this.turn === 1 ? 0 : 1)
		return this.turn;
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
		var takenPositions = blocks.map(b => b.position)
		// ???
		WINNING_COMBINATION.forEach(w => {
			var diff = wc.filter(x => takenPositions.indexOf(x) < 0 );
			if (diff.length === 0) return true;
		})
		return false;
	}

	anyoneWins() {
		var filledBlocks = this.blocks
			.filter(b => !b.free)
			.map((b, i) => ({ block: b.value, position: i }));
		return (this.doesPlayerWins('cross', filledBlocks) || this.doesPlayerWins('circle', filledBlocks));
	}

}
