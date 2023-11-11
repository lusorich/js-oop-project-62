import BaseSchema from './BaseSchema.js';

const stringValidatorMap = {
  required: (value) => typeof value === 'string' && !!value,
  minLength: (value, minLength) => value.length >= minLength,
  contains: (value, substring) => value.split(' ').includes(substring),
};

class StringSchema extends BaseSchema {
  required() {
    this.addSchemaValidator({
      name: 'required',
      fn: stringValidatorMap.required,
    });

    return this;
  }

  minLength(minLength = 0) {
    this.addSchemaValidator({
      name: 'minLength',
      fn: stringValidatorMap.minLength,
      args: minLength,
    });

    return this;
  }

  contains(substring) {
    this.addSchemaValidator({
      name: 'contains',
      fn: stringValidatorMap.contains,
      args: substring,
    });

    return this;
  }
}

export default StringSchema;
