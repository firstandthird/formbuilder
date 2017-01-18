import tpl from 'lodash.template';

export default class Base {
  constructor() {
    this.compiledTemplate = tpl(this.template);
    return this;
  }

  render(data) {
    const tplData = Object.assign({}, this.defaults || {}, data);

    return this.compiledTemplate(tplData);
  }
}
