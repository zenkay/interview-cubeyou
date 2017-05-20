# Tic-Tac-Toe for Cubeyou

## Setup

This project implement the Tic Tac Toe, human vs human turn-based, game using Angular.js (with a couple of modules) and Bootstrap.

To run the game download or clone the repository, then run 

```
yarn install
```

to install all the require libraries, then start the server (powered by the Angular-CLI) by running

```
ng serve
```

Game should be available on `http://localhost:4200` after a few seconds and look as the image below:

![Tic Tac Toe](https://cloud.githubusercontent.com/assets/223858/26279150/04cd2d1a-3dac-11e7-8aae-2a5c136e5756.png)

N.B. The Angular-CLI require Node.js. The Project is tested **only** with version v7.0.0.

## Description

Project is composed by 4 elements:

- **App Component** initialize the game and handle player's moves updating the UI accordingly.
- **Game Service** implement logic for initialize the game and decide if someone wins 
- **Block** modelize a single checkbox of the game grid
- **Players** modelize the users that play the game one after the other


