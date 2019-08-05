import {ctor, Empty} from "./Types";

export interface IStringIdentifiable {
  id: string | undefined;
}

export function StringIdentifiable<T extends ctor = ctor<Empty>>(superclass: T = Empty as T) {
  return class extends superclass implements IStringIdentifiable {
    protected _id?: string;

    public get id(): string | undefined {
      return this._id;
    }

    public set id(id: string | undefined) {
      this._id = id;
    }
  };
}
