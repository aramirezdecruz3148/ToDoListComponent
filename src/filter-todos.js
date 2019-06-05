function filterTodos(todos, filter) {
    const textInput = filter.task.toLowerCase();
    const radioButton = filter.completed.toString();

    return todos.filter(todo => {
        const task = todo.task.toLowerCase();
        const taskCompleted = todo.completed.toString();

        let completedCompare = taskCompleted.includes(radioButton);
        if(radioButton === 'all') {
            completedCompare = true;
        }
        
        const hasTask = !textInput || task.includes(textInput);
        return hasTask && completedCompare;
    });
}

export default filterTodos;