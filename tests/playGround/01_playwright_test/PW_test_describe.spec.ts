import { test } from '@playwright/test';

/**
 * This Spec File Demonstrate Playwtight test.describe()
 * Wher 2 arguments are passed to describe()
 * Whre we Group multiple test in a single spec file
 * 1st parameter <title> and a 2nd parameter <fn> callback function
 */

test.describe.only('Describe Bock1', () => {
  test('TEST001', () => {
    console.log('BLOCK1_TEST001', new Date().toISOString());
  });
  test('TEST002', () => {
    console.log('BLOCK1_TEST002', new Date().toISOString());
  });
});

test.describe.skip('Describe Bock2', () => {
  test('TEST003', () => {
    console.log('BLOCK2_TEST001', new Date().toISOString());
  });
  test('TEST004', () => {
    console.log('BLOCK2_EST002', new Date().toISOString());
  });
});
