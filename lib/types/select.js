import Base from './_base';

export default class SelectType extends Base {
  get template() {
    return `
    <select<% if(id) { %> id="\${id}" name="\${id}"<% } %><% if(className) { %> class="\${className}"<% } %><% if (required) { %> required<% } %><% if (multiple) { %> multiple<% } %>>
      <% for(var i = 0; i < options.length; i++) { %>
        <% var option = (typeof options[i] === 'object') ? options[i] : { value: options[i], name: options[i] }; %>
        <option value="\${option.value}"<% if (value === option.value) {%> selected<% } %>>\${option.name}</option>
      <% } %>
    </select>`;
  }

  get defaults() {
    return {
      id: false,
      className: false,
      value: '',
      multiple: false,
      required: false,
      options: []
    };
  }
}
