import Validator from '../src/Validator.js';

let validator;

const startsWithFn = (value, start) => value.startsWith(start);
const minFn = (value, min) => value >= min;

beforeEach(() => {
  validator = new Validator('string', 'startWith', startsWithFn);
});

describe('custom validators test', () => {
  test('addValidator method should add validator in custom validators', () => {
    validator.addValidator('string', 'startWith', startsWithFn);

    const expected = { type: 'string', name: 'startWith', fn: startsWithFn };

    expect(validator.getValidators()[0]).toEqual(expected);
  });

  test('custom validator add to schema validators via method test', () => {
    validator.addValidator('string', 'startWith', startsWithFn);

    const schema = validator.string().test('startWith', 'H');
    const expected = {
      name: 'startWith',
      fn: startsWithFn,
      args: 'H',
    };

    expect(schema.getValidators()[0]).toEqual(expected);
  });

  test('isValid method call custom validators if test method call', () => {
    validator.addValidator('string', 'startWith', startsWithFn);

    const schema = validator.string().test('startWith', 'H');

    expect(schema.isValid('exlet')).toBeFalsy();
    expect(schema.isValid('Hexlet')).toBeTruthy();

    validator.addValidator('number', 'min', minFn);

    const schema2 = validator.number().test('min', 5);

    expect(schema2.isValid(4)).toBeFalsy();
    expect(schema2.isValid(6)).toBeTruthy();
  });
});
