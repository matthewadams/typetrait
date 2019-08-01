import {expect} from "chai";
import {IPerson, Person} from "../../main/Person";

describe("Person", () => {
  it("should work", () => {
    const id = "id";
    const p: IPerson = new Person().withId(id).withName("John Smith");
    expect(p.id).to.equal("id");
    expect(p.name).to.equal("foobar");
  });
});
