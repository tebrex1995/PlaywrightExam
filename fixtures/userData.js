import { generateRandomNumber, generateRandomString } from './utils';

export const EXISTING_USER = {
  email: 'aleksatester@gmail.com',
  password: 'test123',
};

export const VALID_USER = {
  username: generateRandomString(5),
  email: `${generateRandomString(6)}@gmail.com`,
  password: generateRandomString(7),
};

export const UPDATE_INFO = {
  first_name: generateRandomString(3),
  last_name: generateRandomString(3),
  email: `${generateRandomString(6)}@gmail.com`,
  street_and_number: `${generateRandomString(9)} ${generateRandomNumber()}`,
  phone_number: `${generateRandomNumber()}`,
  city: generateRandomString(4),
  postal_code: generateRandomNumber(),
  country: generateRandomString(5),
};
