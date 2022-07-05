/**
 * @author Pradeep Kumar Beher
 * @description This file is used to create the body for the api request
 */

/**
 * POST /login
 */
export const loginAPIBody = {
  type: 'login',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};
