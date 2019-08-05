// tslint:disable:max-classes-per-file
class Empty {}

type ctor<T = Empty> = new(...args: any[]) => T;

function Nameable<T extends ctor = ctor<Empty>>(superclass: T = Empty as T) {
  return class extends superclass {
    public name?: string;
  };
}

function Identifiable<ID, T extends ctor = ctor<Empty>>(superclass: T = Empty as T) {
  return class extends superclass {
    public id?: ID;
  };
}

class Person1 extends Nameable(Identifiable<string>()) { // compiles
  constructor(name?: string) {
    super();
    this.name = name;
    this.id = "none";
  }
}

class Person2 extends Identifiable<string>(Nameable()) { // fails to compile
  constructor(name?: string) {
    super();
    this.name = name;
    this.id = "none";
  }
}
