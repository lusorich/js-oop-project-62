import BaseSchema from './BaseSchema.js';

class ObjectSchema extends BaseSchema {
  shape(obj) {
    const entries = Object.entries(obj);

    for (let i = 0; i < entries.length; i += 1) {
      const [key, fns] = entries[i];

      super.addSchemaValidator({ name: key, fn: fns });
    }

    return this;
  }

  isValid(obj) {
    if (obj === null) {
      return true;
    }

    const entries = Object.entries(obj);

    for (let i = 0; i < entries.length; i += 1) {
      const [key, value] = entries[i];
      const validatorIndex = super.getValidatorIndex(key);
      const validator = super.getValidatorByIndex(validatorIndex);

      const fieldValidators = validator.fn.validators;

      for (let j = 0; j < fieldValidators.length; j += 1) {
        const fieldValidator = fieldValidators[j];

        if (!fieldValidator.fn(value, fieldValidators[j].args)) {
          return false;
        }
      }
    }

    return true;
  }
}

export default ObjectSchema;
