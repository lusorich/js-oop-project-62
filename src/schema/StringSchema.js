import BaseSchema from './BaseSchema.js';

const test = {
  required: (value) => !!value,
  minLength: (value, minLength) => value.length >= minLength,
  contains: (value, substring) => value.split(' ').includes(substring),
};

class StringSchema extends BaseSchema {
  required() {
    this.setValidator({ fn: test.required });

    return this;
  }

  minLength(minLength = 0) {
    this.setValidator({ fn: test.minLength, args: minLength });

    return this;
  }

  contains(substring) {
    this.setValidator({ fn: test.contains, args: substring });

    return this;
  }
}

export default StringSchema;
