import Component from './Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {

    render() {
        const dom = this.renderDOM();
        const todos = this.props.todos;
        const onDone = this.props.onDone;

        todos.forEach(todo => {
            const todoItem = new TodoItem({ todo, onDone });
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