import {expect} from "chai";
import {I as IPerson, Person} from "../../main/Person";

describe("Person", () => {
  it("should work", () => {
    const p: IPerson = new Person().withName("foobar");
    expect(p.name).to.equal("foobar");
  });
});
