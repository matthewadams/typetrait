/**
 * Some convenient types.
 */
export type stringu = string | undefined;
export type stringn = string | null;
export type stringun = stringu | stringn;

export type numberu = number | undefined;
export type numbern = number | null;
export type numberun = numberu | numbern;

export type booleanu = boolean | undefined;
export type booleann = boolean | null;
export type booleanun = booleanu | booleann;

export type arrayu<T> = T[] | undefined;
export type arrayn<T> = T[] | null;
export type arrayun<T> = arrayu<T> | arrayn<T>;

export type objectu = object | undefined;
export type objectn = object | null;
export type objectun = objectu | objectn;

export type anyu = any | undefined;
export type anyn = any | null;
export type anyun = anyu | anyn;

export type undefinedn = undefined | null;
export type nullu = undefinedn;

export type ctor<T = {}> = new (...args: any[]) => T;

export class Empty {
}
