import { test } from '@playwright/test';

test.afterAll(async () => {
  console.log('After All');
});
test.afterEach(async () => {
  console.log('After Each');
});
test('TE:001', async () => {
  console.log('CONSOLE-TE-001');
});

test('TE:002', async () => {
  console.log('CONSOLE-TE-002');
});

test('TE:003', async () => {
  console.log('CONSOLE-TE-003');
});
