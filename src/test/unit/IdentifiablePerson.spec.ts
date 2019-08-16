import {expect, use} from "chai";
import dirtyChai from "dirty-chai";
import {Identifiable, IIdentifiable} from "../../main/Identifiable";
import {stringu} from "../../main/Types";

use(dirtyChai);

interface IIdentifiablePerson extends IIdentifiable<string> {
}

class IdentifiablePerson extends Identifiable("none") implements IIdentifiablePerson {

  public static readonly ID_RX = /^\w+$/;

  constructor() {
    super();
    this._id = "none";
  }

  /* protected */
  public _testSetId(id: stringu): stringu {
    if (!(id && id.match(IdentifiablePerson.ID_RX))) {
      throw new Error("bad id");
    }
    return super._testSetId(id);
  }
}

describe("IdentifiablePerson", () => {
  it("should work with a string id", () => {
    const id = "id";
    const p = new IdentifiablePerson().withId(id);

    expect(p.id).to.equal(id);
    p.unsetId();
    expect(p.id).not.to.be.ok();

    // confirm overriding
    expect(() => new IdentifiablePerson().withId("invalid id")).to.throw();
  });
});
