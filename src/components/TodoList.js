import Component from './Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {

    render() {
        const dom = this.renderDOM();
        const todos = this.props.todos;
        const onDone = this.props.onDone;
        const onRemove = this.props.onRemove;

        todos.forEach(todo => {
            const todoItem = new TodoItem({ todo, onRemove, onDone });
            const todoItemDOM = todoItem.render();
            dom.appendChild(todoItemDOM);
        });

        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
        <section id="todos"></section>
        `;
    }
}

export default TodoList; 