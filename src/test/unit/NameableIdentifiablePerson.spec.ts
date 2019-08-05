import {expect, use} from "chai";
import dirtyChai from "dirty-chai";
import {NameableIdentifiablePerson} from "./NameableIdentifiablePerson";

use(dirtyChai);

describe("NameableIdentfiablePerson", () => {
  it("should work with a string id", () => {
    const id = "id";
    const name = "John Smith";
    const p = new NameableIdentifiablePerson(name);
    p.id = id;

    expect(p.id).to.equal(id);
    expect(p.name).to.equal(name);
  });
});
