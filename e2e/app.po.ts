import { browser, element, by } from 'protractor';

export class TicTacToeGame {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('h1')).getText();
  }
}
