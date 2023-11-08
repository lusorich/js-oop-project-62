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
}

export default Validator;
