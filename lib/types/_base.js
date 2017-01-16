import tpl from 'lodash.template';

export default class base {
  setup(template) {
    if (template) {
      this.template = template;
    }

    if (!this.defaults) {
      this.defaults = {};
    }

    this.compiledTemplate = tpl(this.template);

    return this;
  }

  render(data) {
    const tplData = Object.assign({}, this.defaults, data);

    return this.compiledTemplate(tplData);
  }
}
