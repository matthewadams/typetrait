import {expect, use} from "chai";
import dirtyChai from "dirty-chai";

use(dirtyChai);

import {IStringIdentifiableNameablePerson, StringIdentifiableNameablePerson} from "./StringIdentifiableNameablePerson";

describe("Person", () => {
  it("should work with a string id", () => {
    const id = "id";
    const name = "John Smith";
    const p = new StringIdentifiableNameablePerson(name).withId(id);

    expect(p.id).to.equal(id);
    p.unsetId();
    expect(p.id).not.to.be.ok();
    expect(p.name).to.equal(name);

    // confirm overriding
    expect(() => new StringIdentifiableNameablePerson("invalidname")).to.throw();
    expect(() => new StringIdentifiableNameablePerson(name).withId("invalid id")).to.throw();
  });
});
