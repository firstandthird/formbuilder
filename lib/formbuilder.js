import tpl from 'lodash.template';

export default class FormBuilder {
  constructor(data) {
    const templates = {
      formStart: tpl('<form method="${method}" action="${action}"<% if(typeof className !== "undefined") { %> class="${className}"<% } %>>'),
      formEnd: tpl('</form>'),
      label: tpl('<label<% if(id) { %> for="${id}"<% } %>>${label}</label>'),
      input: tpl('<input type="${type}"<% if(id) { %> id="${id}" name="${id}"<% } %><% if(className) { %> class="${className}"<% } %><% if(typeof value !== "undefined") { %> value="${value}"<% } %><% if(placeholder) { %> placeholder="${placeholder}"<% } %><% if (required) { %> required<% } %>>'),
      button: tpl('<button type="button"<% if(className) { %> class="${className}"<% } %>>${value}</button>')
    };

    const inputTypes = [
      'text',
      'email',
      'password',
      'number',
      'tel',
      'url',
      'search',
      'hidden',
      'time',
      'week',
      'month',
      'date',
      'datetime-local',
      'color'
    ];

    const inputDefaults = {
      id: false,
      className: false,
      label: false,
      placeholder: false,
      value: false,
      required: false
    };

    if (!data) {
      throw new Error('I can\'t do anything without a form object');
    }

    if (!data.fields || !data.fields.length) {
      throw new Error('Form has no inputs.');
    }

    let output = templates.formStart({
      method: data.method,
      action: data.action,
      className: data.className
    });

    data.fields.forEach(field => {
      let template;

      if (inputTypes.indexOf(field.type)) {
        template = templates.input;
      } else {
        // No template found
        return;
      }

      if (field.label) {
        output += templates.label(Object.assign({}, inputDefaults, field));
      }

      output += template(Object.assign({}, inputDefaults, field));
    });

    output += templates.formEnd();

    this.output = output;

    return this;
  }

  toHTML() {
    return this.output;
  }
}
