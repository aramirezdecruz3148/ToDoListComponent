import Component from './Component.js';

class TodoItem extends Component {
    render() {
        const dom = this.renderDOM();
        const todo = this.props.todo;
        const onDone = this.props.onDone;
        const onRemove = this.props.onRemove;
        const removeButton = dom.querySelector('button');
        const checkbox = dom.querySelector('input[name=checkbox]');

        removeButton.addEventListener('click', () => {
            onRemove(todo);
        });
        
        checkbox.addEventListener('change', () => {
            onDone(todo);
        });
        return dom;
    }

    renderTemplate() {
        const todo = this.props.todo;
        let checked = '';

        if(todo.completed) {
            checked = 'checked';
        }
        return /*html*/`
        <label for="${todo.label}">
            <input ${checked} name="checkbox" value="${todo.label}" type="checkbox"> ${todo.task}
            <button id="x">✗</button>
        </label>
        `;
    }

}


export default TodoItem;