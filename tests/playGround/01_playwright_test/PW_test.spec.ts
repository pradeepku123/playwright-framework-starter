import { test, expect } from '@playwright/test';
/**
 * Every test Block Mainly contians Hooks Functions
 */
test('Playwright Test1', async ({}, testinfo) => {
  console.log(testinfo.title);
});
//test bock 2nd
test.only('Playwright Test2', async ({}, testinfo) => {
  console.log(testinfo.title);
});

// test.AfterAll(); |- Execute after all tests once

test.afterAll(async () => {
  console.log('test.afterAll');
});

// test.beforeAll(); |- Execute before all tests once

test.beforeAll(async () => {
  console.log('test.beforeAll');
});

// test.afterEach(); |- Execute after each test

test.afterEach(async () => {
  console.log('test.afterEach');
});

//test.beforeEach(); |- Execute before each test

test.beforeEach(async () => {
  console.log('test.beforeEach');
});
