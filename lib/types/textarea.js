import Base from './_base';

export default class TextareaType extends Base {
  init() {
    this.template = '<textarea<% if(id) { %> id="${id}" name="${id}"<% } %><% if(className) { %> class="${className}"<% } %><% if(placeholder) { %> placeholder="${placeholder}"<% } %><% if (required) { %> required<% } %>>${value}</textarea>';

    this.defaults = {
      id: false,
      className: false,
      placeholder: false,
      value: '',
      required: false
    };
  }
}
