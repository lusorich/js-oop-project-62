import BaseSchema from './BaseSchema.js';

const test = {
  required: (value) => !!value,
  minLength: (value, minLength) => value.length >= minLength,
};

class StringSchema extends BaseSchema {
  isValid(value) {
    for (let i = 0; i < this.validators.length; i += 1) {
      const { fn, args = null } = this.validators[i];
      const isValidByValidator = fn(value, args);

      if (!isValidByValidator) {
        return false;
      }
    }

    return true;
  }

  required() {
    this.validators.push({ fn: test.required });

    return this;
  }

  minLength(minLength = 0) {
    this.validators.push({ fn: test.minLength, args: minLength });

    return this;
  }
}

export default StringSchema;
