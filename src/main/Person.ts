import {I as INameable, Nameable} from "./Nameable";

export interface I extends INameable {
}

export class Person extends Nameable() implements I {
  constructor(name?: string) {
    super();
    this.withName(name);
  }
}
