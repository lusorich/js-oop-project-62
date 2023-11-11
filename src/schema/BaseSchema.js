class BaseSchema {
  constructor() {
    this.validators = [];
  }

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

  addValidator(validator) {
    this.validators.push(validator);
  }

  updateValidator(validator, index) {
    this.validators[index] = validator;
  }

  getValidatorIndex(name) {
    return this.validators.findIndex((validator) => validator.name === name);
  }

  getValidatorByIndex(index) {
    return this.validators[index];
  }
}

export default BaseSchema;
