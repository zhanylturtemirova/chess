import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLlogo from "../../assets/black-king.png";
import whiteLlogo from "../../assets/white-king.png";

export default class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLlogo : whiteLlogo;
    this.name = FigureNames.KING;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}
