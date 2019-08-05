import {expect, use} from "chai";
import dirtyChai from "dirty-chai";

use(dirtyChai);

import {IStringIdentifiableNameablePerson, StringIdentifiableNameablePerson} from "./StringIdentifiableNameablePerson";

describe("StringIdentifiableNameablePerson", () => {
  it("should work with a string id", () => {
    const id = "id";
    const name = "John Smith";
    const p = new StringIdentifiableNameablePerson(name);
    p.id = id;

    expect(p.id).to.equal(id);
    expect(p.name).to.equal(name);
  });
});
