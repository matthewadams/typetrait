import Nameable from './Nameable';

type su = string | undefined

export class NameableTrait implements Nameable {
    protected _name?: string

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
}
