import Base from './_base';

export default class ButtonType extends Base {
  init() {
    this.template = '<button type="${buttonType}"<% if(className) { %> class="${className}"<% } %>>${value}</button>';

    this.defaults = {
      className: false,
      value: false,
      buttonType: 'submit'
    };
  }
}
