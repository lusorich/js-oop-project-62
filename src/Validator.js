import schemasMap from './utils/schemas-map.js';

class Validator {
  constructor() {
    this.schemas = schemasMap;
    this.currentSchema = null;
  }

  string() {
    this.currentSchema = new this.schemas.String();

    return this.currentSchema;
  }

  number() {
    this.currentSchema = new this.schemas.Number();

    return this.currentSchema;
  }

  array() {
    this.currentSchema = new this.schemas.Array();

    return this.currentSchema;
  }
}

export default Validator;
