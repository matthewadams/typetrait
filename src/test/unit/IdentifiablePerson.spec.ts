import {expect, use} from "chai";
import dirtyChai from "dirty-chai";
import {IdentifiablePerson} from "./IdentifiablePerson";

use(dirtyChai);

describe("IdentifiablePerson", () => {
  it("should work with a string id", () => {
    const id = "id";
    const p = new IdentifiablePerson();
    p.id = id;

    expect(p.id).to.equal(id);
  });
});
