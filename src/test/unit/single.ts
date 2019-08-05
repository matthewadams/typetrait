// tslint:disable:max-classes-per-file
class Nothing {}

type ctor<T = Nothing> = new(...args: any[]) => T;

function Nameable<T extends ctor = ctor<Nothing>>(superclass: T = Nothing as T) {
  return class extends superclass {
    public name?: string;
  };
}

function Identifiable<ID, T extends ctor>(superclass: T = Nothing as T, defaultId: ID) {
  return class extends superclass {
    public id?: ID = defaultId;
  };
}

class Person1 extends Nameable(Identifiable(Nothing, "none")) {
  constructor(name?: string) {
    super();
    this.name = name;
  }
}

class Person2 extends Identifiable(Nameable(Nothing), "none") {
  constructor(name?: string) {
    super();
    this.name = name;
  }
}
