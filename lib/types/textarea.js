import Base from './_base';

export default class TextareaType extends Base {
  get template() {
    return '<textarea<% if(id) { %> id="${id}" name="${id}"<% } %><% if(className) { %> class="${className}"<% } %><% if(placeholder) { %> placeholder="${placeholder}"<% } %><% if (required) { %> required<% } %>>${value}</textarea>';
  }

  get defaults() {
    return {
      id: false,
      className: false,
      placeholder: false,
      value: '',
      required: false
    };
  }
}
