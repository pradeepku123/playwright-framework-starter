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
});
