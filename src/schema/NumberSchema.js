import BaseSchema from './BaseSchema.js';

const numberValidator = {
  required: (value) => typeof value === 'number' && value !== null && !!value,
  positive: (value) => value > 0,
  range: (value, args) => {
    const [start, end] = args;

    return value >= start && value <= end;
  },
};

class NumberSchema extends BaseSchema {
  required() {
    this.addValidator({ name: 'required', fn: numberValidator.required });

    return this;
  }

  positive() {
    this.addValidator({ name: 'positive', fn: numberValidator.positive });

    return this;
  }

  range(start, end) {
    this.addValidator({
      name: 'range',
      fn: numberValidator.range,
      args: [start, end],
    });

    return this;
  }
}

export default NumberSchema;
