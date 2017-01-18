import Base from './_base';

export default class LabelType extends Base {
  get template() {
    return '<label<% if(id) { %> for="${id}"<% } %>>${label}</label>';
  }

  get defaults() {
    return {
      id: false,
      label: false
    };
  }
}
