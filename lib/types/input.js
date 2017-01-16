import base from './_base';

export default class inputType extends base {
  constructor(...args) {
    super();
    this.template = '<input type="${type}"<% if(id) { %> id="${id}" name="${id}"<% } %><% if(className) { %> class="${className}"<% } %><% if(typeof value !== "undefined") { %> value="${value}"<% } %><% if(placeholder) { %> placeholder="${placeholder}"<% } %><% if (required) { %> required<% } %>>';

    this.defaults = {
      id: false,
      className: false,
      placeholder: false,
      value: false,
      required: false
    };

    return this.setup(...args);
  }
}
