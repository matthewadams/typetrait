import {Identifiable, IIdentifiable} from "../../main/Identifiable";
import {INameable, Nameable} from "../../main/Nameable";

export interface IPerson extends IIdentifiable<string>, INameable {
}

export class Person
  extends Identifiable<string>(Nameable())
  implements IPerson {
  constructor(name?: string) {
    super();
    this._name = name;
    this._id = "none";
  }
}
