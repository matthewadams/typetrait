import {expect, use} from "chai";
import dirtyChai from "dirty-chai";
import {Person} from "./Person";

use(dirtyChai);

describe("Person", () => {
  it("should work with a string id", () => {
    const id = "id";
    const name = "John Smith";
    const p: Person = new Person(name);

    expect(p.id).to.equal("none");

    p.id = id;
    expect(p.id).to.equal(id);
    p.unsetId();
    expect(p.id).not.to.be.ok();
    expect(p.name).to.equal(name);

    // confirm overriding
    expect(() => new Person("invalidname")).to.throw();
    expect(() => new Person(name).withId("invalid id")).to.throw();
  });
});
