/**
 * Some convenient types.
 */

/**
 * `string | undefined`
 */
export type stringu = string | undefined;
/**
 * `string | null`
 */
export type stringn = string | null;
/**
 * `string | undefined | null`
 */
export type stringun = stringu | stringn;

/**
 * `number | undefined`
 */
export type numberu = number | undefined;
/**
 * `number | null`
 */
export type numbern = number | null;
/**
 * `number | undefined | null`
 */
export type numberun = numberu | numbern;

/**
 * `boolean | undefined`
 */
export type booleanu = boolean | undefined;
/**
 * `boolean | null`
 */
export type booleann = boolean | null;
/**
 * `boolean | undefined | null`
 */
export type booleanun = booleanu | booleann;

/**
 * `object | undefined`
 */
export type objectu = object | undefined;
/**
 * `object | null`
 */
export type objectn = object | null;
/**
 * `object | undefined | null`
 */
export type objectun = objectu | objectn;

/**
 * `any | undefined`
 */
export type anyu = any | undefined;
/**
 * `any | null`
 */
export type anyn = any | null;
/**
 * `any | undefined | null`
 */
export type anyun = anyu | anyn;

/**
 * `array<ID> | undefined`
 */
export type arrayu<T> = T[] | undefined;
/**
 * `array<ID> | null`
 */
export type arrayn<T> = T[] | null;
/**
 * `array<ID> | undefined | null`
 */
export type arrayun<T> = arrayu<T> | arrayn<T>;

/**
 * `undefined | null`
 */
export type undefinedn = undefined | null;

/**
 * Alias for [`undefinedn`].
 */
export type nullu = undefinedn;

/**
 * The empty class. Literally `class Empty {}`.
 */
export class Empty {
}

/**
 * A constructor.
 */
export type ctor<T = Empty> = new(...args: any[]) => T;
