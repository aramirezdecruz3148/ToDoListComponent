import TodoItem from '../src/components/TodoItem.js';

const test = QUnit.test;
QUnit.module('TodoItem');

test('TodoItem template', assert => {
    // arrange
    const todo = {
        task: 'Wash dog',
        label: 'wash-dog',
        completed: true
    };

    const expected = /*html*/ `
    <label for="wash-dog">
        <input checked name="checkbox" value="wash-dog" type="checkbox"> Wash dog
    </label>
    `;
    // act
    const todoItem = new TodoItem({ todo });
    const html = todoItem.renderTemplate();
    // assert
    assert.htmlEqual(html, expected);
});