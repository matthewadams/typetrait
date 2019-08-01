import Constructor from "./Constructor";
import Empty from "./Empty";
import INameable from "./INameable";

type su = string | undefined;

export default function Nameable<T extends Constructor>(superclass: T = Empty as T) {
  return class extends superclass implements INameable {
    protected _name?: string;

    public get name(): su {
      return this._name;
    }

    public withName(name?: string): this {
      this.name = name;
      return this;
    }

    public set name(name: su) {
      this._doSetName(this._testSetName(name));
    }

    protected _testSetName(name?: string): su {
      return name;
    }

    protected _doSetName(name?: string): this {
      this._name = name;
      return this;
    }
  };
}
