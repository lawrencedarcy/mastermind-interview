// USE npm test TO RUN THIS FILE

import { mastermind } from './index';

test('Mastermind function returns true', () => {

  const value = mastermind();

  expect(value).toBeTruthy;
});