import Base from './_base';

export default class ButtonType extends Base {
  get template() {
    return '<button type="${buttonType}"<% if(className) { %> class="${className}"<% } %> ${extraProps}>${value}</button>';
  }

  get defaults() {
    return {
      className: false,
      value: false,
      buttonType: 'submit'
    };
  }
}
