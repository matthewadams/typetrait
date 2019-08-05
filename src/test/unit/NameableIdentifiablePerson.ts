import {Identifiable, IIdentifiable} from "../../main/Identifiable";
import {INameable, Nameable} from "../../main/Nameable";

export interface INameableIdentifiablePerson extends INameable, IIdentifiable<string> {
}

export class NameableIdentifiablePerson
  extends Nameable(Identifiable<string>())
  implements INameableIdentifiablePerson {

  constructor(name?: string) {
    super();
    this.name = name;
    this._id = "none";
  }
}
