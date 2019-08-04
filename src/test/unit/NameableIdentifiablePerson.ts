import {Identifiable, IIdentifiable} from "../../main/Identifiable";
import {INameable, Nameable} from "../../main/Nameable";
import {stringu} from "../../main/Types";

export interface INameableIdentifiablePerson extends INameable, IIdentifiable<string> {
}

export class NameableIdentifiablePerson extends Nameable(Identifiable<string>())
  implements INameableIdentifiablePerson {

  public static readonly ID_RX = /^\w+$/;
  public static readonly NAME_RX = /^[A-Za-z]+\s+[A-Za-z]+$/;

  constructor(name?: string) {
    super();
    this.name = name;
    this._id = "none";
  }

  protected _testSetId(id: stringu): stringu {
    if (!(id && id.match(NameableIdentifiablePerson.ID_RX))) {
      throw new Error("bad id");
    }
    return super._testSetId(id);
  }

  protected _testSetName(name: stringu): stringu {
    if (!(name && name.match(NameableIdentifiablePerson.NAME_RX))) {
      throw new Error("bad name");
    }
    return super._testSetName(name);
  }
}
