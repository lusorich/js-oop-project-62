import BaseSchema from './BaseSchema.js';

const stringValidator = {
  required: (value) => typeof value === 'string' && !!value,
  minLength: (value, minLength) => value.length >= minLength,
  contains: (value, substring) => value.split(' ').includes(substring),
};

class StringSchema extends BaseSchema {
  required() {
    this.addValidator({ name: 'required', fn: stringValidator.required });

    return this;
  }

  minLength(minLength = 0) {
    this.addValidator({
      name: 'minLength',
      fn: stringValidator.minLength,
      args: minLength,
    });

    return this;
  }

  contains(substring) {
    this.addValidator({
      name: 'contains',
      fn: stringValidator.contains,
      args: substring,
    });

    return this;
  }
}

export default StringSchema;
