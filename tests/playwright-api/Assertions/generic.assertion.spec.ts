/**
 * Expore all Generic Level Assertions in PW API
 */
import { test, expect } from '@playwright/test';

test(`Generic Level Assertions`, async ({ page }) => {
  // toBe
  const val = { prop: 4 };
  expect(val.prop).toBe(4);
  expect(val).toBe(val);
  expect(val).toStrictEqual({ prop: 4 });
  expect(0.4).toBeCloseTo(0.404);
  let x = 0;
  expect(x).toBeDefined();

  expect(false).toBeFalsy();

  expect(34).toBeGreaterThanOrEqual(23);
  expect(34).toBeGreaterThan(23);
  // Date july 3, 2023
  class MyClass {}
  class MyXClass {}
  expect(new MyClass()).toBeInstanceOf(MyClass);

  expect(34).toBeLessThan(35);
  expect(34).toBeLessThanOrEqual(34);
  let expt = NaN;
  expect(expt).toBeNaN();

  expt = null;
  expect(expt).toBeNull();

  expect(true).toBeTruthy();

  expect(undefined).toBeUndefined();

  let toContainString = 'hello world!';

  expect(toContainString).toContain('ello');
  let arrExpected = [2, 3];
  expect(new Set([1, 2, 3, 4])).toContain(2);
  let arrVal = [{ a: 1 }, { b: 2 }, { c: 3 }];
  expect(arrVal).toContainEqual({ a: 1 });
  expect('Hello, world!').toHaveLength(13);
  let propVal = { a: 1, b: 2, c: 3 };
  expect(propVal).toHaveProperty('a', 1);
  let toMatchVal = `Pradeep`;
  expect(toMatchVal).toMatch(/Pra/);
  expect(() => {
    throw new Error('Hello');
  }).toThrow(/hello/);

  expect(() => {
    throw 2;
  }).toThrowError();
});
