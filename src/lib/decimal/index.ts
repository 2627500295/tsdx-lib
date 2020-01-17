import { Decimal } from 'decimal.js-light';

/**
 * 加法 (a + b)
 *
 * @param a
 * @param b
 */
export function plus(a: number, b: number = a) {
    return new Decimal(a).plus(b).toNumber();
}

/**
 * 减法 (a - b)
 * 
 * @param a
 * @param b 
 */
export function minus(a: number, b: number = a) {
    return new Decimal(a).minus(b).toNumber();
}

/**
 * 乘法 (a * b)
 *
 * @param a
 * @param b 
 */
export function times(a: number, b: number = a) {
    return new Decimal(a).times(b).toNumber();
}

/**
 * 除法 (a / b)
 *
 * @param a
 * @param b 
 */
export function dividedBy(a: number, b: number = a) {
    return new Decimal(a).dividedBy(b).toNumber();
}

/**
 * 取模 (a % b)
 * 
 * @param a
 * @param b 
 */
export function modulo(a: number, b: number = a) {
    return new Decimal(a).modulo(b).toNumber();
}

/**
 * toPower (a ** b)
 * 
 * @param a
 * @param b 
 */
export function toPower(a: number, b: number = a) {
    return new Decimal(a).toPower(b).toNumber();
}
