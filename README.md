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

Project is based on 4 elements:

- **App Component** initialize the game and handle player's moves updating the UI accordingly.
- **Game Service** implement logic for initialize the game and decide if someone wins 
- **Block** modelize a single checkbox of the game grid
- **Players** modelize the users that play the game one after the other

## Technological choices

A few days ago I applied for a Full MEAN Stack developer position at Cubeyou. After a quick chat with recruiter, I received an assignment from Cubeyou's CTO: implement the Tic Tac Toe game as single page application. 

My first move was to Google about the game implementation in Javascript. Its a pretty common demo app so I was able to find a tons of already implemented version. 

jQuery would have been an easy move. I could implement all the logic in a single HTML file and ship it. Easy but I wouldn't learn anything new.

React would have been my choice. I like the project and, together with Redux, enable developers to implement beautiful application with a pure functional style. Anyway I already use it at my current job and Cubeyou is working on the MEAN stack so my choice goes to Angular.

I never implemented an Angular application from scratch and the Angular-CLI was a beautiful discovery. I followed a tutorial that implement a raw version of the interface and the logic. Then I removed everything I didn't need, redesign the UI and refactor the code.

The result wasn't impressive but works quite well. 