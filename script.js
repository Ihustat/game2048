import { Grid } from './modules/grid.js';
import { Tile } from './modules/tile.js';

const gameBoard = document.querySelector('.game-board');

const grid = new Grid(gameBoard);
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));