import {Identifiable, IIdentifiable} from "./Identifiable";
import {INameable, Nameable} from "./Nameable";
import {stringu} from "./Types";

export interface IPerson extends IIdentifiable<string>, INameable {
}

export class Person extends Identifiable<string>(Nameable()) implements IPerson {

  public static readonly ID_RX = /^\w+$/;
  public static readonly NAME_RX = /^[A-Za-z]+\s+[A-Za-z]+$/;

  constructor(name?: string) {
    super();
    this.name = name;
    this._id = "none";
  }

  protected _testSetId(id: string): string {
    if (!id.match(Person.ID_RX)) {
      throw new Error("bad id");
    }
    return super._testSetId(id);
  }

  protected _testSetName(name: stringu): stringu {
    if (!name.match(Person.NAME_RX)) {
      throw new Error("bad name");
    }
    return super._testSetName(name);
  }
}
