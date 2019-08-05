import {Identifiable, IIdentifiable} from "../../main/Identifiable";
import {INameable, Nameable} from "../../main/Nameable";
import {stringu} from "../../main/Types";

export interface IIdentifiablePerson extends IIdentifiable<string> {
}

export class IdentifiablePerson extends Identifiable("none") implements IIdentifiablePerson {

  public static readonly ID_RX = /^\w+$/;

  constructor() {
    super();
    this._id = "none";
  }

  protected _testSetId(id: stringu): stringu {
    if (!(id && id.match(IdentifiablePerson.ID_RX))) {
      throw new Error("bad id");
    }
    return super._testSetId(id);
  }
}
