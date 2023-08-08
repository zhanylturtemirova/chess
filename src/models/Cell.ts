import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
  readonly x: number = 0;
  readonly y: number = 0;
  readonly color: Colors = Colors.BLACK;
  figure: Figure | null | undefined;
  board: Board | undefined;
  available: boolean | undefined;
  id: number | undefined;

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
  ) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.color = color;
    this.figure = figure;
    this.available = false;
    this.id = Math.random();
  }
  isEmpty(): boolean {
    return this.figure === null;
  }
  isEnemy(target: Cell): boolean {
    if (target.figure) {
      return this.figure?.color !== target.figure.color;
    }
    return false;
  }
  isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) return false;

    const min = Math.min(target.y, this.y);
    const max = Math.max(target.y, this.y);
    for (let y = min + 1; y < max; y++) {
      if (!this.board?.getCell(this.x, y).isEmpty()) {
        return false;
      }
    }
    return true;
  }
  isEmptyHorizontal(target: Cell): boolean {
    if (this.y !== target.y) return false;

    const min = Math.min(target.x, this.x);
    const max = Math.max(target.x, this.x);
    for (let x = min + 1; x < max; x++) {
      if (!this.board?.getCell(x, this.y).isEmpty()) {
        return false;
      }
    }
    return true;
  }
  isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(this.x - target.x);
    const absY = Math.abs(this.y - target.y);
    if (absX !== absY) {
      return false;
    }
    const dgX = this.x < target.x ? 1 : -1;
    const dgY = this.y < target.y ? 1 : -1;
    for (let i = 1; i < absY; i++) {
      if (!this.board?.getCell(this.x + i * dgX, this.y + i * dgY).isEmpty()) {
        return false;
      }
    }

    return true;
  }
  setFigure(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this;
  }
  addLostFigures(figure: Figure) {
    if (figure.color === Colors.BLACK) {
      this.board?.lostBlackFigures.push(figure);
    } else {
      this.board?.lostWhiteFigures.push(figure);
    }
  }
  moveFigure(target: Cell) {
    if (this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target);
      if (target.figure) {
        this.addLostFigures(target.figure);
      }
      target.setFigure(this.figure);
      this.figure = null;
    }
  }
}
