import {INameable, Nameable} from "../../main/Nameable";
import {IStringIdentifiable, StringIdentifiable} from "../../main/StringIdentifiable";

export interface IStringIdentifiableNameablePerson extends IStringIdentifiable, INameable {
}

export class StringIdentifiableNameablePerson
  extends StringIdentifiable(Nameable())
  implements IStringIdentifiableNameablePerson {
  constructor(name?: string) {
    super();
    this._name = name;
    this._id = "none";
  }
}
