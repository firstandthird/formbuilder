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

### Built in types

#### input (text/email/password/etc..)

This is the default type that is used when no other type matches.

**Options**

   - `id` (optional) - id that is placed on the element and label
   - `label` (optional) - Label element text.
   - `className` (optional) - Class for the input element
   - `required` (default: false) - Sets required attribute
   - `placeholder` (optional) - Sets placeholder value
   - `value` (optional) - Input value

#### textarea

**Options**

  - `id` (optional) - id that is placed on the element and label
  - `label` (optional) - Label element text.
  - `className` (optional) - Class for the input element
  - `required` (default: false) - Sets required attribute
  - `placeholder` (optional) - Sets placeholder value
  - `value` (optional) - Input value

#### select

**Options**

  - `id` (optional) - id that is placed on the element and label
  - `label` (optional) - Label element text.
  - `className` (optional) - Class for the input element
  - `multiple` (default: false) - Sets multiple attribute
  - `required` (default: false) - Sets required attribute
  - `value` (optional) - Input value
  - `options` - Items may be an strings objects with a name and value property: `{ value: 'somevalue', name: 'Some Value'}`. If `value` above matches the item value the selected attribute will be set.

#### button

**Options**

  - `className` (optional) - Class for the button element
  - `value` (optional) - Button text
  - `buttonType` (default: submit) - Type of button

### Custom types

Custom types can be defined by extending the base class and implementing a basic api. Templates are passed through lodash.template.

```js
class CustomField extends FormBuilder.baseTypeClass() {
  get template() {
    return '<custom class="${className}"></custom>';
  }

  // optional
  get defaults() {
    return {
      className: 'test-class'
    }
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
