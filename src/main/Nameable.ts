import {ctor, Empty} from "./Types";

export interface INameable {
  name?: string;
}

export function Nameable<T extends ctor = ctor<Empty>>(superclass: T = Empty as T) {
  return class extends superclass implements INameable {
    protected _name: string | undefined;

    public get name(): string | undefined {
      return this._name;
    }

    public set name(name: string | undefined) {
      this._name = name;
    }
  };
}
