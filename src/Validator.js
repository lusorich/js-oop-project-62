import schemasMap from './utils/schemas-map.js';

class Validator {
  constructor() {
    this.schemas = schemasMap;
    this.currentSchema = null;
    this.customValidators = [];
  }

  addValidator(type, name, fn) {
    this.customValidators.push({ type, name, fn });

    return this;
  }

  getValidators() {
    return this.customValidators;
  }

  string() {
    this.currentSchema = new this.schemas.String(this.customValidators, 'string');

    return this.currentSchema;
  }

  number() {
    this.currentSchema = new this.schemas.Number(this.customValidators, 'number');

    return this.currentSchema;
  }

  array() {
    this.currentSchema = new this.schemas.Array(this.customValidators, 'array');

    return this.currentSchema;
  }

  object() {
    this.currentSchema = new this.schemas.Object(this.customValidators, 'object');

    return this.currentSchema;
  }
}

export default Validator;
