import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Player } from './player';
import { Block } from './block';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GameService]
})
export class AppComponent {

	lock = false;
	constructor(public gs: GameService, public snackBar: MdSnackBar) {}

	newGame() {
		this.gs.freeBlocksRemaining = 9;
		this.gs.initBlocks();
		this.lock = false;
		this.gs.turn = 0;
	}

	resetGame(event) {
		location.reload();
		event.preventDefault();
	}

	playerClick(i) {
		// selected block is not empty
		if( this.gs.blocks[i].free == false || this.lock == true ) return;

		this.gs.freeBlocksRemaining -= 1;

		// fill block with symbol
		this.gs.blocks[i].free = false;
		if ( this.gs.turn == 0 ) this.gs.blocks[i].setValue("circle");
		else this.gs.blocks[i].setValue("cross");

		if (this.gs.anyoneWins()) {
			this.lock = true;
			this.gs.players[this.gs.turn].score += 1;
			return;
		}

		// no more free blocks, game draw
		if (this.gs.freeBlocksRemaining <= 0) {
			this.gs.draw += 1;
			this.lock = true;
			return;
		}

		var player = this.gs.changeTurn();
	}


}
