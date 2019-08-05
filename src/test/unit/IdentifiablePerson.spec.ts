import {expect, use} from "chai";
import dirtyChai from "dirty-chai";
import {IdentifiablePerson} from "./IdentifiablePerson";

use(dirtyChai);

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
