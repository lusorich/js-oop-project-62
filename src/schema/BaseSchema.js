class BaseSchema {
  constructor(customValidators, schemaType) {
    this.validators = [];
    this.schemaType = schemaType;
    this.customValidators = customValidators || [];
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

  addSchemaValidator(validator) {
    this.validators.push(validator);
  }

  getValidators() {
    return this.validators;
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

  getCustomValidatorByNameAndType(name) {
    return this.customValidators.find(
      (validator) => validator.type === this.schemaType
        && validator.name === name,
    );
  }

  test(validatorName, value) {
    const customValidator = this.getCustomValidatorByNameAndType(validatorName);

    if (customValidator) {
      this.addSchemaValidator({
        name: customValidator.name,
        fn: customValidator.fn,
        args: value,
      });
    }

    return this;
  }
}

export default BaseSchema;
