export class Empty {
}

export type ctor<T = Empty> = new(...args: any[]) => T;
