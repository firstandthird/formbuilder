import FormBuilder from '../lib/formbuilder';

import { test } from 'tape';

test('implementation', assert => {
  assert.equal(typeof FormBuilder, 'function', 'FormBuilder class exists');
  assert.end();
});

test('Input generation', assert => {
  const form = new FormBuilder({
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
  });

  const html = form.toHTML();
  const expected = '<form method="POST" action="/api/test/form" class="form"><label for="firstName">First Name</label><input type="text" id="firstName" name="firstName" class="input" value="false" required><label for="email">Email</label><input type="email" id="email" name="email" class="input" value="false" placeholder="email@example.com"><input type="submit" class="button" value="Submit"></form>';
  assert.equal(html, expected, 'HTML as expected');

  assert.end();
});

test('custom class', assert => {
  class CustomField extends FormBuilder.baseTypeClass() {
    constructor(...args) {
      super();
      this.template = '<custom></custom>';

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
        type: 'custom'
      }
    ]
  });

  form.registerCustomType('custom', CustomField);

  const html = form.toHTML();
  const expected = '<form method="POST" action="/api/test/form" class="form"><custom></custom></form>';
  assert.equal(html, expected, 'HTML as expected');

  assert.end();
});
