import playwright from 'eslint-plugin-playwright';

export default [
  playwright.configs['flat/recommended'],
  {
    rules: {
      'playwright/expect-expect': [
        'error',
        {
          additionalAssertFunctionNames: ['assertCustomCondition'],
        },
      ],
      'playwright/max-nested-describe': ['error', { max: 5 }],
    },
  },
];
