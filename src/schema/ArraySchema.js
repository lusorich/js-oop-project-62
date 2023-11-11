import BaseSchema from './BaseSchema.js';

const arrayValidatorMap = {
  required: (value) => Array.isArray(value),
  sizeof: (value, size) => value.length === size,
};

class ArraySchema extends BaseSchema {
  required() {
    this.addSchemaValidator({
      name: 'required',
      fn: arrayValidatorMap.required,
    });

    return this;
  }

  sizeof(size) {
    const validatorIndex = super.getValidatorIndex('sizeof');

    if (validatorIndex !== -1) {
      super.updateValidator(
        {
          name: 'sizeof',
          fn: arrayValidatorMap.sizeof,
          args: size,
        },
        validatorIndex,
      );
    } else {
      this.addSchemaValidator({
        name: 'sizeof',
        fn: arrayValidatorMap.sizeof,
        args: size,
      });
    }

    return this;
  }
}

export default ArraySchema;
