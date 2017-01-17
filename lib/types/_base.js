import tpl from 'lodash.template';

export default class Base {
  constructor() {
    this.template = '';
    this.defaults = {};
    this.init();
    this.compileTemplate();
    return this;
  }

  // Empty on purpose
  init() { }

  compileTemplate() {
    this.compiledTemplate = tpl(this.template);

    return this;
  }

  render(data) {
    const tplData = Object.assign({}, this.defaults, data);

    return this.compiledTemplate(tplData);
  }
}
