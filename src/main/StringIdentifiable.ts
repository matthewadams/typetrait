/**
 * The StringIdentifiable trait.
 */
import {ctor, Empty} from "./Types";

/**
 * The StringIdentifiable interface.
 */
export interface IStringIdentifiable {
  id: string | undefined;

  /**
   * Id mutator as builder pattern.
   *
   * @param name
   * @return this
   */
  withId(id: string): this;

  /**
   * Deletes the `id` property from this object.
   */
  unsetId(): this;
}

/**
 * StringIdentifiable trait.
 *
 * @param superclass The superclass that this trait subclass will extend, else [[Empty]].
 * @typeparam ID Type of the superclass.
 */
export function StringIdentifiable<T extends ctor = ctor<Empty>>(superclass: T = Empty as T)
// TODO: add return type (T & StringIdentifiable)?
{
  return class extends superclass implements IStringIdentifiable {
    protected _id?: string;

    /**
     * Id accessor.
     */
    public get id(): string | undefined {
      return this._id;
    }

    public set id(id: string | undefined) {
      this._doSetId(this._testSetId(id));
    }

    public withId(id: string): this {
      this.id = id;
      return this;
    }

    public unsetId(): this {
      delete this._id;
      return this;
    }

    protected _testSetId(id: string | undefined): string | undefined {
      return id;
    }

    protected _doSetId(id: string | undefined): this {
      this._id = id;
      return this;
    }
  };
}
