import {INameable, Nameable} from "./Nameable";
import {IStringIdentifiable, StringIdentifiable} from "./StringIdentifiable";
import {stringu} from "./Types";

export interface IStringIdentifiablePerson extends IStringIdentifiable, INameable {
}

export class StringIdentifiablePerson extends StringIdentifiable(Nameable()) implements IStringIdentifiablePerson {

  public static readonly ID_RX = /^\w+$/;
  public static readonly NAME_RX = /^[A-Za-z]+\s+[A-Za-z]+$/;

  constructor(name?: string) {
    super();
    this.name = name;
    this._id = "none";
  }

  protected _testSetId(id: stringu): stringu {
    if (!(id && id.match(StringIdentifiablePerson.ID_RX))) {
      throw new Error("bad id");
    }
    return super._testSetId(id);
  }

  protected _testSetName(name: stringu): stringu {
    if (!(name && name.match(StringIdentifiablePerson.NAME_RX))) {
      throw new Error("bad name");
    }
    return super._testSetName(name);
  }
}
