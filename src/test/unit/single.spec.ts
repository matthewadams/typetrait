// tslint:disable:max-classes-per-file
class Empty {
}

type ctor<T = Empty> = new(...args: any[]) => T;

function Nameable<T extends ctor = ctor<Empty>>(superclass: T = Empty as T) {
  return class extends superclass {
    public name?: string;
  };
}

function Identifiable<ID, T extends ctor>(defaultId: ID, superclass: T = Empty as T) {
  return class extends superclass {
    public id?: ID = defaultId;
  };
}

class Person1 extends Nameable(Identifiable("none")) {
  constructor(name?: string) {
    super();
    this.name = name;
  }
}

class Person2 extends Identifiable("none", Nameable()) {
  constructor(name?: string) {
    super();
    this.name = name;
  }
}
