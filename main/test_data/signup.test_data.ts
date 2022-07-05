import { faker } from '@faker-js/faker';
/**
 * Generated Test Data for:signup page and exported
 * Create a wrapper around FackerJS
 */
export const signup = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
};
