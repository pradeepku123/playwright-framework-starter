import { faker } from '@faker-js/faker';
/**
 * Generated Test Data for:signup page and exported
 * Create a wrapper around FackerJS
 */
export const signup = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
};
