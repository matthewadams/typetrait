import {expect, use} from "chai";
import dirtyChai from "dirty-chai";
import {Person} from "./Person";

use(dirtyChai);

describe("Person", () => {
  it("should work with a string id", () => {
    const id = "id";
    const name = "John Smith";
    const p = new Person(name);
    p.id = id;

    expect(p.id).to.equal(id);
    expect(p.name).to.equal(name);
  });
});
