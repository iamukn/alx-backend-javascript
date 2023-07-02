export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if(!typeof val === 'string') throw new Error('Code must be string');
    this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if(!typeof val === 'string') throw new Error('Name must be string');
    this._name = val;
  }

  displayFullCurrency() {
    return(`${this._name} (${this._code})`);
  }
}
