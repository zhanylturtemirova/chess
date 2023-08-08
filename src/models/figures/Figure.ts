import logo from "../../assets/black-bishop.png";
import { Cell } from "../Cell";
import { Colors } from "../Colors";

export enum FigureNames {
  FIGURE = "FIGURE",
  KING = "KING",
  KNIGHT = "KNIGHT",
  PAWN = "PAWN",
  QUEEN = "QUEEN",
  ROOK = "ROOK",
  BISHOP = "BISHOP",
}

export class Figure {
  color: Colors | undefined;
  logo: typeof logo | null | undefined;
  cell: Cell | undefined;
  name: FigureNames | undefined;
  id: number | undefined;
  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }
  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false;
    }
    if (target.figure?.name === FigureNames.KING) {
      return false;
    }
    return true;
  }
  moveFigure(target: Cell): boolean {
    return true;
  }
}
