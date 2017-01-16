import base from './_base';

export default class formStartType extends base {
  constructor(...args) {
    super();
    this.template = '<form method="${method}" action="${action}"<% if(className) { %> class="${className}"<% } %>>';

    this.defaults = {
      method: 'POST',
      action: '#',
      className: false
    };

    return this.setup(...args);
  }
}
