import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLlogo from "../../assets/black-bishop.png";
import whiteLlogo from "../../assets/white-bishop.png";

export default class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLlogo : whiteLlogo;
    this.name = FigureNames.BISHOP;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell?.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
