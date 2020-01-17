/**
 * 加法 (a + b)
 *
 * @param a
 * @param b
 */
export function plus(a: number, b: number = a): number {
  return a + b;
}

/**
 * 减法 (a - b)
 *
 * @param a
 * @param b
 */
export function minus(a: number, b: number = a): number {
  return a - b;
}

/**
 * 乘法 (a / b)
 *
 * @param a 
 * @param b 
 */
export function times(a:number, b: number = a): number {
  return a * b;
}

/**
 * 除法 (a / b)
 *
 * @param a 
 * @param b 
 */
export function dividedBy(a:number, b: number = a): number {
  return a / b;
}

/**
 * 取模 (a % b)
 *
 * @param a 
 * @param b 
 */
export function modulo(a:number, b: number = a): number {
  return a % b;
}

/**
 * 乘方 (a ** b)
 *
 * @param a 
 * @param b 
 */
export function toPower(a:number, b: number = a): number {
  return a ** b;
}
