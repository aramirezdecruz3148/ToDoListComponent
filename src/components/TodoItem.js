import Component from './Component.js';

class TodoItem extends Component {
    renderTemplate() {
        const todo = this.props.todo;
        return /*html*/`
        <label for="${todo.label}">
            <input checked value="${todo.label}" type="checkbox"> ${todo.task}
        </label>
        `;
    }

}


export default TodoItem;