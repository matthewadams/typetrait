import {expect, use} from "chai";
import dirtyChai from "dirty-chai";
import {Identifiable, IIdentifiable} from "../../main/Identifiable";
import {INameable, Nameable} from "../../main/Nameable";
import {stringu} from "../../main/Types";

use(dirtyChai);

interface IPerson extends IIdentifiable<string>, INameable {
}

class Person extends Identifiable("none", Nameable()) implements IPerson {

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

describe("Person", () => {
  it("should work with a string id", () => {
    const id = "id";
    const name = "John Smith";
    const p = new Person(name);

    expect(p instanceof Person).to.be.true();
    expect(p.id).to.equal("none");

    p.id = id;
    expect(p.id).to.equal(id);
    p.unsetId();
    expect(p.id).not.to.be.ok();
    expect(p.name).to.equal(name);

    // confirm method overriding
    expect(() => new Person("invalidname")).to.throw();
    expect(() => new Person(name).withId("invalid id")).to.throw();
  });
});
