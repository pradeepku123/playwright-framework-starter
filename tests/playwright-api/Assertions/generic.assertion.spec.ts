/**
 * Expore all Generic Level Assertions in PW API
 */
import { test, expect } from '@playwright/test';

test(`Generic Level Assertions`, async () => {
  // toBe
  const val = { prop: 4 };
  expect(val.prop).toBe(4);
  expect(val).toBe(val);
  expect(val).toStrictEqual({ prop: 4 });
});
