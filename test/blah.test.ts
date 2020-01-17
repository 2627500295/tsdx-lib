import * as decimal from '@/lib/decimal';
import * as base from '@/lib/calc';

describe('精确计算 (Decimal Calc)', () => {
  it('加法 (plus, add)', () => expect(decimal.plus(1, 1)).toEqual(2));
  it('减法 (minus, sub)', () => expect(decimal.minus(1, 1)).toEqual(0));
  it('乘法 (times, mul)', () => expect(decimal.times(2, 3)).toEqual(6));
  it('除法 (dividedBy, div)', () => expect(decimal.dividedBy(6, 2)).toEqual(3));
  it('取模 (modulo, mod)', () => expect(decimal.modulo(2, 3)).toEqual(2));
  it('乘方 (toPower, pow)', () => expect(decimal.toPower(2, 3)).toEqual(8));
});

describe('基础计算 (Base Calc)', () => {
  it('加法 (plus, add)', () => expect(base.plus(1, 1)).toEqual(2));
  it('减法 (minus, sub)', () => expect(base.minus(1, 1)).toEqual(0));
  it('乘法 (times, mul)', () => expect(base.times(2, 3)).toEqual(6));
  it('除法 (dividedBy, div)', () => expect(base.dividedBy(6, 2)).toEqual(3));
  it('取模 (modulo, mod)', () => expect(base.modulo(2, 3)).toEqual(2));
  it('乘方 (toPower, pow)', () => expect(base.toPower(2, 3)).toEqual(8));
});