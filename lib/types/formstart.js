import Base from './_base';

export default class FormStartType extends Base {
  init() {
    this.template = '<form method="${method}" action="${action}"<% if(className) { %> class="${className}"<% } %>>';

    this.defaults = {
      method: 'POST',
      action: '#',
      className: false
    };
  }
}
