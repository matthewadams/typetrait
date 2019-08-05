/**
 * The Identifiable trait.
 */
import {ctor, Empty} from "./Types";

/**
 * The Identifiable interface.
 */
export interface IIdentifiable<ID> {
  id: ID | undefined;

  /**
   * Id mutator as builder pattern.
   *
   * @param name
   * @return this
   */
  withId(id: ID): this;

  /**
   * Deletes the `id` property from this object.
   */
  unsetId(): this;
}

/**
 * Identifiable trait.
 *
 * @param superclass The superclass that this trait subclass will extend, else [[Empty]].
 * @typeparam ID Type of the superclass.
 */
export function Identifiable<ID, T extends ctor>(defaultId: ID, superclass: T = Empty as T) {
  return class extends superclass implements IIdentifiable<ID> {
    protected _id?: ID = defaultId;

    /**
     * Id accessor.
     */
    public get id(): ID | undefined {
      return this._id;
    }

    public set id(id: ID | undefined) {
      this._doSetId(this._testSetId(id));
    }

    public withId(id: ID): this {
      this.id = id;
      return this;
    }

    public unsetId(): this {
      delete this._id;
      return this;
    }

    protected _testSetId(id: ID | undefined): ID | undefined {
      return id;
    }

    protected _doSetId(id: ID | undefined): this {
      this._id = id;
      return this;
    }
  };
}
