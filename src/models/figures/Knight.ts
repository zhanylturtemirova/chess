import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLlogo from "../../assets/black-knight.png";
import whiteLlogo from "../../assets/white-knight.png";

export default class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLlogo : whiteLlogo;
    this.name = FigureNames.KNIGHT;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const absX = this.cell ? Math.abs(target.x - this.cell.x) : 0;
    const absY = this.cell ? Math.abs(target.y - this.cell.y) : 0;
    if ((absX === 1 && absY === 2) || (absX === 2 && absY === 1)) {
      return true;
    }
    return false;
  }
}
