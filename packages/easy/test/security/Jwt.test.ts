import '@thisisagile/easy-test';
import { Jwt, validate } from '../../src';
import { Dev } from '../ref';

describe('Test Jwt', () => {
  const dev = Dev.Naoufal.toJSON();
  const jwt = Jwt.sign(dev);
  const falseJwt = Jwt.of({ jwt: 'wrong' });

  test('Check if a valid jwt contains the token.', () => {
    expect(jwt).toBeValid();
    expect(jwt.decode().name).toBe(Dev.Naoufal.name);
  });

  test('Decode', () => {
    const res2 = jwt.decode();
    expect(res2).toMatchObject(dev);
  });

  test('Validate', () => {
    expect(validate(jwt)).toBeValid();
    expect(validate(falseJwt)).not.toBeValid();
  });

  test('toJSON.', () => {
    expect(jwt.toJSON()).toStrictEqual({ jwt: jwt.value });
  });
});
