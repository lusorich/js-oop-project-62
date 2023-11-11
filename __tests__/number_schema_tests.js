import Validator from '../src/Validator.js';
import NumberSchema from '../src/schema/NumberSchema.js';

let validator;
let schema;

beforeEach(() => {
  validator = new Validator();
  schema = validator.number();
});

describe('number schema test', () => {
  test('number method return NumberSchema class', () => {
    expect(schema).toBeInstanceOf(NumberSchema);
  });

  test('if not required value can be empty', () => {
    expect(schema.isValid()).toBeTruthy();
    expect(schema.isValid(null)).toBeTruthy();
  });

  test("if a required check added value can't be null or undefined or empty", () => {
    schema.required();

    expect(schema.isValid()).toBeFalsy();
    expect(schema.isValid(null)).toBeFalsy();
    expect(schema.isValid(undefined)).toBeFalsy();
  });

  test('if a positive check added value must be positive', () => {
    schema.positive();

    expect(schema.isValid()).toBeFalsy();
    expect(schema.isValid(0)).toBeTruthy();
    expect(schema.isValid(-12)).toBeFalsy();
    expect(schema.isValid(2)).toBeTruthy();
  });

  test('if a range check added value must be in this range', () => {
    schema.range(-2, 3);

    expect(schema.isValid(1)).toBeTruthy();
    expect(schema.isValid(-1)).toBeTruthy();
    expect(schema.isValid(4)).toBeFalsy();
  });
});
