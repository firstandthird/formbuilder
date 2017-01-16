import base from './_base';

export default class formEndType extends base {
  constructor(...args) {
    super();
    this.template = '</form>';

    return this.setup(...args);
  }
}
