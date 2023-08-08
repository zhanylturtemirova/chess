import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLlogo from "../../assets/black-queen.png";
import whiteLlogo from "../../assets/white-queen.png";

export default class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLlogo : whiteLlogo;
    this.name = FigureNames.QUEEN;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell?.isEmptyVertical(target)) {
      return true;
    }
    if (this.cell?.isEmptyHorizontal(target)) {
      return true;
    }
    if (this.cell?.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
