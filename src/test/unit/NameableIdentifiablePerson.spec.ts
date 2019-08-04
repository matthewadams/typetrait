import {expect, use} from "chai";
import dirtyChai from "dirty-chai";
import {NameableIdentifiablePerson} from "./NameableIdentifiablePerson";

use(dirtyChai);

describe("Person", () => {
  it("should work with a string id", () => {
    const id = "id";
    const name = "John Smith";
    const p = new NameableIdentifiablePerson(name).withId(id);

    expect(p.id).to.equal(id);
    p.unsetId();
    expect(p.id).not.to.be.ok();
    expect(p.name).to.equal(name);

    // confirm overriding
    expect(() => new NameableIdentifiablePerson("invalidname")).to.throw();
    expect(() => new NameableIdentifiablePerson(name).withId("invalid id")).to.throw();
  });
});
