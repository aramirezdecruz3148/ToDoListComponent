import Component from './Component.js';

class Filter extends Component {

    renderTemplate() {
        return /*html*/`
        <section class="filter-section">
            <label>Filter Tasks:</label>
            <input id="task" name="text-filter" type="text" placeholder="search list by task">
            <input name="radio-filter" value="all" type="radio" id="all" checked>
            <label for="all">All Tasks</label>
            <input name="radio-filter" value="completed" type="radio" id="completed">
            <label for="completed">Completed Tasks</label>
            <input name="radio-filter" value="not-done" type="radio" id="not-completed">
            <label for="not-done">Not Done</label>
        </section>
        `;
    }
}
export default Filter;