import { generateRandomString } from './utils';

export const EXISTING_USER = {
  username: 'aleksatester@gmail.com',
  password: 'test123',
};

export const VALID_USER = {
  username: generateRandomString(5),
  email: `${generateRandomString(6)}@gmail.com`,
  password: generateRandomString(7),
};
