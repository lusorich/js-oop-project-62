import Validator from '../src/Validator.js';
import ObjectSchema from '../src/schema/ObjectSchema.js';

let validator;
let schema;

beforeEach(() => {
  validator = new Validator();
  schema = validator.object();
});

describe('object schema test', () => {
  test('object method return ObjectSchema class', () => {
    expect(schema).toBeInstanceOf(ObjectSchema);
  });

  test('if a shape check added object fields must valid', () => {
    schema.shape({
      name: validator.string().required(),
      age: validator.number().positive(),
    });

    expect(schema.isValid({ name: 'kolya', age: 100 })).toBeTruthy();
    expect(schema.isValid({ name: 'maya', age: null })).toBeTruthy();
    expect(schema.isValid({ name: '', age: null })).toBeFalsy();
    expect(schema.isValid({ name: 'ada', age: -5 })).toBeFalsy();
  });
});
