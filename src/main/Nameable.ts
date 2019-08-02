/**
 * The Nameable trait.
 */
import {ctor, Empty, stringu} from "./Types";

/**
 * The Nameable interface.
 */
export interface INameable {
  name?: string;

  /**
   * Name mutator as builder pattern.
   *
   * @param name
   * @return this
   */
  withName(name: stringu): this;
}

/**
 * Nameable trait.
 *
 * @param superclass The superclass that this trait subclass will extend, else [[Empty]].
 * @typeparam ID Type of the superclass.
 */
export function Nameable<T extends ctor = ctor<Empty>>(superclass: T = Empty as T)
// TODO: add return type (T & INameable)?
{
  return class extends superclass implements INameable {
    protected _name: stringu;

    /**
     * Name accessor.
     */
    public get name(): stringu {
      return this._name;
    }

    public set name(name: stringu) {
      this._doSetName(this._testSetName(name));
    }

    public withName(name: stringu): this {
      this.name = name;
      return this;
    }

    protected _testSetName(name: stringu): stringu {
      return name;
    }

    protected _doSetName(name: stringu): this {
      this._name = name;
      return this;
    }
  };
}
