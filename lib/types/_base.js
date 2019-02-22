import tpl from 'lodash.template';
import aug from 'aug';

export default class Base {
  constructor() {
    this.compiledTemplate = tpl(this.template);
    return this;
  }

  render(data) {
    const tplData = aug({
      extraProps: ''
    }, this.defaults || {}, data);

    if (typeof tplData.extraProps === 'object') {
      let props = '';

      Object.keys(tplData.extraProps).forEach(key => {
        props += `${key}="${tplData.extraProps[key]}" `;
      });

      tplData.extraProps = props.trim();
    }

    return this.compiledTemplate(tplData);
  }
}
