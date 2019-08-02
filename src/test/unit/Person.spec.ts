import {expect} from "chai";
import {IPerson, Person} from "../../main/Person";
import {IStringIdentifiablePerson, StringIdentifiablePerson} from "../../main/StringIdentifiablePerson";

describe("Person", () => {
  it("should work with a string id", () => {
    const id = "id";
    const name = "John Smith";
    const p: IStringIdentifiablePerson = new StringIdentifiablePerson(name).withId(id);

    expect(p.id).to.equal(id);
    expect(p.name).to.equal(name);

    // confirm overriding
    expect(() => new StringIdentifiablePerson("invalidname")).to.throw();
    expect(() => new StringIdentifiablePerson(name).withId("invalid id")).to.throw();
  });

  it("should work with a generic id of type string", () => {
    const id = "id";
    const name = "John Smith";
    const p: IPerson = new Person(name).withId(id);

    expect(p.id).to.equal(id);
    expect(p.name).to.equal(name);

    // confirm overriding
    expect(() => new StringIdentifiablePerson("invalidname")).to.throw();
    expect(() => new StringIdentifiablePerson(name).withId("invalid id")).to.throw();
  });
});
