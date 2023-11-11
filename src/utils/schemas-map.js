import ArraySchema from '../schema/ArraySchema.js';
import NumberSchema from '../schema/NumberSchema.js';
import StringSchema from '../schema/StringSchema.js';
import ObjectSchema from '../schema/ObjectSchema.js';

const schemasMap = {
  String: StringSchema,
  Number: NumberSchema,
  Array: ArraySchema,
  Object: ObjectSchema,
};

export default schemasMap;
