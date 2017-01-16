import base from './_base';

export default class labelType extends base {
  constructor(...args) {
    super();
    this.template = '<label<% if(id) { %> for="${id}"<% } %>>${label}</label>';

    this.defaults = {
      id: false,
      label: false
    };

    return this.setup(...args);
  }
}
