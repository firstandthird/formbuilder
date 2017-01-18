import Base from './_base';

export default class InputType extends Base {
  get template() {
    return '<input type="${type}"<% if(id) { %> id="${id}" name="${id}"<% } %><% if(className) { %> class="${className}"<% } %><% if(typeof value !== "undefined") { %> value="${value}"<% } %><% if(placeholder) { %> placeholder="${placeholder}"<% } %><% if (required) { %> required<% } %>>';
  }

  get defaults() {
    return {
      id: false,
      className: false,
      placeholder: false,
      value: false,
      required: false
    };
  }
}
