import Validator from '../src/Validator.js';
import StringSchema from '../src/schema/StringSchema.js';

let validator;
let schema;

beforeEach(() => {
  validator = new Validator();
  schema = validator.string();
});

describe('string schema test', () => {
  test('string method return StringSchema class', () => {
    expect(schema).toBeInstanceOf(StringSchema);
  });

  test("if a required check added value can't be null or undefined or empty string", () => {
    schema.required();

    expect(schema.isValid()).toBeFalsy();
    expect(schema.isValid(null)).toBeFalsy();
    expect(schema.isValid(undefined)).toBeFalsy();
    expect(schema.isValid('null')).toBeTruthy();
  });

  test('if not required value can be empty', () => {
    expect(schema.isValid()).toBeTruthy();
    expect(schema.isValid('')).toBeTruthy();
  });

  test("if a minLength check added value length can't be less", () => {
    schema.minLength(3);

    expect(schema.isValid('12')).toBeFalsy();
    expect(schema.isValid('1234')).toBeTruthy();

    schema.minLength(5);

    expect(schema.isValid('1234')).toBeFalsy();
    expect(schema.isValid('12345')).toBeTruthy();
  });

  test('if a contains check added value must contain a substring', () => {
    schema.contains('mother');

    expect(schema.isValid('father fffmother')).toBeFalsy();
    expect(schema.isValid('father mother')).toBeTruthy();

    schema.contains('father');

    expect(schema.isValid('father mother')).toBeTruthy();
    expect(schema.isValid('cousin mother')).toBeFalsy();
  });
});
