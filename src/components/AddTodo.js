import Component from './Component.js';

class AddTodo extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newTodo = {
                task: formData.get('to-do'),
            };

            onAdd(newTodo);

            form.reset();
            document.activeElement.blur();  
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
        <form>
            <label>To Do Task:<input name="to-do" placeholder="add a new task here"></label>
            <button>Add</button>
        </form>
        `;
    }
}

export default AddTodo;