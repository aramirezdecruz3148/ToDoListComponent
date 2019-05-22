import Component from './Component.js';

class TodoList extends Component {

    render() {
        const list = this.renderDom();

        return list;
    }
    
    renderTemplate() {
        const todos = this.props.todos;
        return /*html*/`
        <section id="todos">${todos.length}</section>
        `;
    }
}

export default TodoList; 