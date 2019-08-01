import {ctor, Empty, stringu} from "./Types";

/**
 * The Nameable interface.
 */
export interface I {
  name?: string;

  /**
   * Name mutator as builder pattern.
   *
   * @param name
   * @return this
   */
  withName(name?: string): this;
}

/**
 * Nameable trait.
 *
 * @param superclass The superclass that this trait subclass will extend, else [[Empty]].
 * @typeparam T Type of the superclass.
 */
export function Nameable<T extends ctor>(superclass: T = Empty as T) {
  return class extends superclass implements I {

    /**
     * Name accessor.
     */
    public get name(): stringu {
      return this._name;
    }

    public set name(name: stringu) {
      this._doSetName(this._testSetName(name));
    }

    protected _name: stringu;

    public withName(name?: string): this {
      this.name = name;
      return this;
    }

    protected _testSetName(name?: string): stringu {
      return name;
    }

    protected _doSetName(name?: string): this {
      this._name = name;
      return this;
    }
  };
}
