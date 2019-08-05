import {ctor, Empty} from "./Types";

export interface IIdentifiable<ID> {
  id: ID | undefined;
}

export function Identifiable<ID, T extends ctor = ctor<Empty>>(superclass: T = Empty as T) {
  return class extends superclass implements IIdentifiable<ID> {
    protected _id?: ID;

    public get id(): ID | undefined {
      return this._id;
    }

    public set id(id: ID | undefined) {
      this._id = id;
    }
  };
}
