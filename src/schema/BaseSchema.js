class BaseSchema {
  constructor() {
    this.validators = [];
  }

  string() {
    this.currentSchema = new this.schemas.String();

    return this.currentSchema;
  }
}

export default BaseSchema;
