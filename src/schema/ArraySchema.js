import BaseSchema from './BaseSchema.js';

const arrayValidator = {
  required: (value) => Array.isArray(value),
  sizeof: (value, size) => value.length === size,
};

class ArraySchema extends BaseSchema {
  required() {
    this.addValidator({ name: 'required', fn: arrayValidator.required });

    return this;
  }

  sizeof(size) {
    const validatorIndex = super.getValidatorIndex('sizeof');

    if (validatorIndex !== -1) {
      super.updateValidator(
        {
          name: 'sizeof',
          fn: arrayValidator.sizeof,
          args: size,
        },
        validatorIndex,
      );
    } else {
      this.addValidator({
        name: 'sizeof',
        fn: arrayValidator.sizeof,
        args: size,
      });
    }

    return this;
  }
}

export default ArraySchema;
