import ArraySchema from '../schema/ArraySchema.js';
import NumberSchema from '../schema/NumberSchema.js';
import StringSchema from '../schema/StringSchema.js';

const schemasMap = {
  String: StringSchema,
  Number: NumberSchema,
  Array: ArraySchema,
};

export default schemasMap;
