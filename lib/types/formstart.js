import Base from './_base';

export default class FormStartType extends Base {
  get template() {
    return '<form method="${method}" action="${action}"<% if(className) { %> class="${className}"<% } %> ${extraProps}>';
  }

  get defaults() {
    return {
      method: 'POST',
      action: '#',
      className: false
    };
  }
}
