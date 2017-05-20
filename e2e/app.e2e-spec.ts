import { TicTacToeGame } from './app.po';

describe('tick-tack App', () => {
  let page: TicTacToeGame;

  beforeEach(() => {
    page = new TicTacToeGame();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Player 1 turn');
  });
});
