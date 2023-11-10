import Validator from '../src/Validator.js';
import ArraySchema from '../src/schema/ArraySchema.js';

let validator;
let schema;

beforeEach(() => {
  validator = new Validator();
  schema = validator.array();
});

describe('array schema test', () => {
  test('array method return ArraySchema class', () => {
    expect(schema).toBeInstanceOf(ArraySchema);
  });

  test('if not required value can be empty', () => {
    expect(schema.isValid()).toBeTruthy();
    expect(schema.isValid(null)).toBeTruthy();
  });

  test("if a required check added value can't be null or not array", () => {
    schema.required();

    expect(schema.isValid()).toBeFalsy();
    expect(schema.isValid(null)).toBeFalsy();
    expect(schema.isValid(undefined)).toBeFalsy();
    expect(schema.isValid([])).toBeTruthy();
    expect(schema.isValid([1, 2, 3])).toBeTruthy();
  });

  test('if a sizeof check added value length must be equal size', () => {
    schema.sizeof(2);

    expect(schema.isValid([])).toBeFalsy();
    expect(schema.isValid([1, 2])).toBeTruthy();

    schema.sizeof(4);

    expect(schema.isValid([])).toBeFalsy();
    expect(schema.isValid([1, 2, 3, 4])).toBeTruthy();
  });
});
