import {INameable, Nameable} from "../../main/Nameable";
import {IStringIdentifiable, StringIdentifiable} from "../../main/StringIdentifiable";
import {stringu} from "../../main/Types";

export interface IStringIdentifiableNameablePerson extends IStringIdentifiable, INameable {
}

export class StringIdentifiableNameablePerson extends StringIdentifiable(Nameable()) implements IStringIdentifiableNameablePerson {

  public static readonly ID_RX = /^\w+$/;
  public static readonly NAME_RX = /^[A-Za-z]+\s+[A-Za-z]+$/;

  constructor(name?: string) {
    super();
    this.name = name;
    this._id = "none";
  }

  protected _testSetId(id: stringu): stringu {
    if (!(id && id.match(StringIdentifiableNameablePerson.ID_RX))) {
      throw new Error("bad id");
    }
    return super._testSetId(id);
  }

  protected _testSetName(name: stringu): stringu {
    if (!(name && name.match(StringIdentifiableNameablePerson.NAME_RX))) {
      throw new Error("bad name");
    }
    return super._testSetName(name);
  }
}
