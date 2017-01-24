import FormBuilder from '../lib/formbuilder';

import test from 'tape-rollup';

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
    extraProps: 'data-module="Form"',
    fields: [
      {
        type: 'text',
        id: 'firstName',
        label: 'First Name',
        className: 'input',
        required: true,
        extraProps: {
          'data-name': 'firstName'
        }
      },
      {
        type: 'email',
        id: 'email',
        label: 'Email',
        className: 'input',
        placeholder: 'email@example.com',
        extraProps: {
          'data-name': 'email',
          'data-action': 'verify',
          'data-action-type': 'input'
        }
      },
      {
        type: 'textarea',
        id: 'bio',
        label: 'Bio',
        className: 'input'
      },
      {
        type: 'select',
        id: 'color',
        label: 'Favorite Color',
        className: 'input',
        value: 'yellow',
        options: [
          {
            value: 'orange',
            name: 'Orange'
          },
          {
            value: 'yellow',
            name: 'Yellow'
          },
          {
            value: 'gold',
            name: 'Gold'
          }
        ]
      },
      {
        type: 'select',
        id: 'animal',
        label: 'Animal',
        className: 'input',
        options: ['Dog', 'Cat']
      },
      {
        type: 'submit',
        className: 'button',
        value: 'Submit'
      }
    ]
  });

  // @TODO: Lets figure out a better solution here.
  const html = form.toHTML();
  const expected = '<form method="POST" action="/api/test/form" class="form" data-module="Form"><label for="firstName" data-name="firstName">First Name</label><input type="text" id="firstName" name="firstName" class="input" required data-name="firstName"><label for="email" data-name="email" data-action="verify" data-action-type="input">Email</label><input type="email" id="email" name="email" class="input" placeholder="email@example.com" data-name="email" data-action="verify" data-action-type="input"><label for="bio" >Bio</label><textarea id="bio" name="bio" class="input" ></textarea><label for="color" >Favorite Color</label>\n    <select id="color" name="color" class="input" >\n      \n        \n        <option value="orange">Orange</option>\n      \n        \n        <option value="yellow" selected>Yellow</option>\n      \n        \n        <option value="gold">Gold</option>\n      \n    </select><label for="animal" >Animal</label>\n    <select id="animal" name="animal" class="input" >\n      \n        \n        <option value="Dog">Dog</option>\n      \n        \n        <option value="Cat">Cat</option>\n      \n    </select><input type="submit" class="button" value="Submit" ></form>';
  assert.equal(html, expected, 'HTML as expected');

  assert.end();
});

test('custom class', assert => {
  class CustomField extends FormBuilder.baseTypeClass() {
    get template() {
      return '<custom></custom>';
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
  const expected = '<form method="POST" action="/api/test/form" class="form" ><custom></custom></form>';
  assert.equal(html, expected, 'HTML as expected');

  assert.end();
});
