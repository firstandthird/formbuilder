import Base from './_base';

export default class LabelType extends Base {
  init() {
    this.template = '<label<% if(id) { %> for="${id}"<% } %>>${label}</label>';

    this.defaults = {
      id: false,
      label: false
    };
  }
}
