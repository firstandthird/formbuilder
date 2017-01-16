import baseType from './types/_base';
import FormStartType from './types/formstart';
import FormEndType from './types/formend';
import LabelType from './types/label';
import InputType from './types/input';
import ButtonType from './types/button';

export default class FormBuilder {
  constructor(data) {
    this.data = data;
    this.typeMap = {
      formStart: new FormStartType(),
      formEnd: new FormEndType(),
      label: new LabelType(),
      input: new InputType(),
      button: new ButtonType()
    };

    return this;
  }

  static baseTypeClass() {
    return baseType;
  }

  registerCustomType(type, cls) {
    this.typeMap[type] = new cls(); // eslint-disable-line new-cap
  }

  generateForm() {
    const data = this.data;

    if (!data) {
      throw new Error('I can\'t do anything without a form object');
    }

    if (!data.fields || !data.fields.length) {
      throw new Error('Form has no inputs.');
    }

    let output = this.typeMap.formStart.render(data);

    data.fields.forEach(field => {
      let type;

      if (typeof this.typeMap[field.type] !== 'undefined') {
        type = this.typeMap[field.type];
      } else {
        type = this.typeMap.input;
      }

      if (field.label) {
        output += this.typeMap.label.render(field);
      }

      output += type.render(field);
    });

    output += this.typeMap.formEnd.render(data);

    return output;
  }

  toHTML() {
    return this.generateForm();
  }
}
