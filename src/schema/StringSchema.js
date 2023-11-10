import BaseSchema from './BaseSchema.js';

const stringValidator = {
  required: (value) => !!value,
  minLength: (value, minLength) => value.length >= minLength,
  contains: (value, substring) => value.split(' ').includes(substring),
};

class StringSchema extends BaseSchema {
  required() {
    this.addValidator({ fn: stringValidator.required });

    return this;
  }

  minLength(minLength = 0) {
    this.addValidator({ fn: stringValidator.minLength, args: minLength });

    return this;
  }

  contains(substring) {
    this.addValidator({ fn: stringValidator.contains, args: substring });

    return this;
  }
}

export default StringSchema;
