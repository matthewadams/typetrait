import {Identifiable, IIdentifiable} from "../../main/Identifiable";
import {INameable, Nameable} from "../../main/Nameable";
import {stringu} from "../../main/Types";

export interface IPerson extends IIdentifiable<string>, INameable {
}

export class Person extends Identifiable( "none", Nameable()) implements IPerson {

  public static readonly ID_RX = /^\w+$/;
  public static readonly NAME_RX = /^[A-Za-z]+\s+[A-Za-z]+$/;

  constructor(name?: string) {
    super();
    this.name = name;
  }

  protected _testSetId(id: stringu): stringu {
    if (!(id && id.match(Person.ID_RX))) {
      throw new Error("bad id");
    }
    return super._testSetId(id);
  }

  protected _testSetName(name: stringu): stringu {
    if (!(name && name.match(Person.NAME_RX))) {
      throw new Error("bad name");
    }
    return super._testSetName(name);
  }
}
