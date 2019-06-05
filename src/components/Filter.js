import Component from './Component.js';

class Filter extends Component {

    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');
        form.addEventListener('input', () => {
            const radioResult = form.elements['radio-filter'].value;
            const textResult = form.elements['text-filter'].value;
            this.props.onFilter({
                task: textResult,
                completed: radioResult
            });
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <section>
            <form class="filter-section">
                <label>Filter Tasks:</label>
                <input id="task" name="text-filter" type="text" placeholder="search list by task">
                <input name="radio-filter" value="all" type="radio" id="all">
                <label for="all">All Tasks</label>
                <input name="radio-filter" value="true" type="radio" id="completed">
                <label for="completed">Completed Tasks</label>
                <input name="radio-filter" value="false" type="radio" id="not-completed">
                <label for="not-done">Not Done</label>
            </form>
        </section>
        `;
    }
}
export default Filter;