# formbuilder

Takes a JSON-like schema and generates a form.

Usage:

```js
import FormBuilder from 'formbuilder';

const formSchema = {
  id: 'testForm',
  action: '/api/test/form',
  method: 'POST',
  className: 'form',
  fields: [
    {
      type: 'text',
      id: 'firstName',
      label: 'First Name',
      className: 'input',
      required: true
    },
    {
      type: 'email',
      id: 'email',
      label: 'Email',
      className: 'input',
      placeholder: 'email@example.com'
    },
    {
      type: 'submit',
      className: 'button',
      value: 'Submit'
    }
  ]
};

const form = new FormBuilder(formSchema);
const html = form.toHTML();

console.log(html);
```

Outputs:

```html
<form action="/api/test/form" method="POST" class="form">
  <label for="firstName">First Name</label>
  <input type="text" id="firstName" name="firstName" class="input" required>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" class="input" placeholder="email@example.com">
  <button type="button" class="button">Submit</button>
</form>
```

### Custom types

Custom types can be defined by extending the base class and implementing a basic api. Templates are passed through lodash.template.

```js
class CustomField extends FormBuilder.baseTypeClass() {
  constructor(...args) {
    super();

    // These are the two important properties. defaults is optional.
    this.template = '<custom class="${className}"></custom>';
    this.defaults = {
      className: 'test-class'
    }

    return this.setup(...args);
  }
}

const form = new FormBuilder({
  id: 'testForm',
  action: '/api/test/form',
  method: 'POST',
  className: 'form',
  fields: [
    {
      type: 'custom',
      className: 'something'
    }
  ]
});

// First param is the type name, second is the class
form.registerCustomType('custom', CustomField);

const html = form.toHTML();
```

```html
<form method="POST" action="/api/test/form" class="form"><custom class="something"></custom></form>
```
