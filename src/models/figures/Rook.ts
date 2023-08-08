import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLlogo from "../../assets/black-rook.png";
import whiteLlogo from "../../assets/white-rook.png";

export default class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLlogo : whiteLlogo;
    this.name = FigureNames.ROOK;
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
    return false;
  }
}
