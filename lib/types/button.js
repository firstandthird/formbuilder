import base from './_base';

export default class buttonType extends base {
  constructor(...args) {
    super();
    this.template = '<button type="${buttonType}"<% if(className) { %> class="${className}"<% } %>>${value}</button>';

    this.defaults = {
      className: false,
      value: false,
      buttonType: 'submit'
    };

    return this.setup(...args);
  }
}
