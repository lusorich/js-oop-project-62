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
}

export default BaseSchema;
