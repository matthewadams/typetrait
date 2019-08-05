import {Identifiable, IIdentifiable} from "../../main/Identifiable";

export interface IIdentifiablePerson extends IIdentifiable<string> {
}

export class IdentifiablePerson
  extends Identifiable<string>()
  implements IIdentifiablePerson {
  constructor() {
    super();
    this._id = "none";
  }
}
