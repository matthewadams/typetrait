import {expect, use} from "chai";
import dirtyChai from "dirty-chai";

use(dirtyChai);

import {IStringIdentifiablePerson, StringIdentifiablePerson} from "./StringIdentifiablePerson";

describe("Person", () => {
  it("should work with a string id", () => {
    const id = "id";
    const name = "John Smith";
    const p = new StringIdentifiablePerson(name).withId(id);

    expect(p.id).to.equal(id);
    p.unsetId();
    expect(p.id).not.to.be.ok();
    expect(p.name).to.equal(name);

    // confirm overriding
    expect(() => new StringIdentifiablePerson("invalidname")).to.throw();
    expect(() => new StringIdentifiablePerson(name).withId("invalid id")).to.throw();
  });
});
