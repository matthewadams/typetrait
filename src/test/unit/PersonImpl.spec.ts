import { expect } from "chai";
import IPerson from "../../main/IPerson";
import PersonImpl from "../../main/PersonImpl";

describe("PersonImpl", () => {
  it("should work", () => {
    const p: IPerson = new PersonImpl().withName("foobar");
    expect(p.name).to.equal("foobar");
  });
});
