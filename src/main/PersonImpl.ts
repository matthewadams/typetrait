import IPerson from "./IPerson";
import Nameable from "./Nameable";

export default class PersonImpl extends Nameable() implements IPerson {
  constructor(name?: string) {
    super();
    this.name = name;
  }
}
