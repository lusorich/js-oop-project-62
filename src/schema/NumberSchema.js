import BaseSchema from './BaseSchema.js';

const numberValidatorMap = {
  required: (value) => typeof value === 'number' && value !== null && !!value,
  positive: (value) => Number(value) >= 0,
  range: (value, args) => {
    const [start, end] = args;

    return value >= start && value <= end;
  },
};

class NumberSchema extends BaseSchema {
  required() {
    this.addSchemaValidator({
      name: 'required',
      fn: numberValidatorMap.required,
    });

    return this;
  }

  positive() {
    this.addSchemaValidator({
      name: 'positive',
      fn: numberValidatorMap.positive,
    });

    return this;
  }

  range(start, end) {
    this.addSchemaValidator({
      name: 'range',
      fn: numberValidatorMap.range,
      args: [start, end],
    });

    return this;
  }
}

export default NumberSchema;
