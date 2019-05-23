const test = QUnit.test;

QUnit.module('filter todos');

function filterTodos(todos, filter) {
    const textInput = filter.task.toLowerCase();
    return todos.filter(todo => {
        const task = todo.task.toLowerCase();

        const hasTask = !textInput || task.includes(textInput);
        return hasTask;
    });
}

const todos = [
    {
        task: 'Wash dog',
        label: 'wash-dog',
        completed: true
    },
    {
        task: 'Clean house',
        label: 'clean-house',
        completed: false
    },
    {
        task: 'Do laundry',
        label: 'do-laundry',
        completed: false
    }
];

test('filter by task', assert => {
    // arrange
    const filter = {
        task: 'Wash dog'
    };
    const filtered = filterTodos(todos, filter);
    // act
    // assert
    assert.deepEqual(filtered, [{ 
        task: 'Wash dog',
        label: 'wash-dog',
        completed: true
    }]);
});

test('no task typed in input, returns all tasks', assert => {
    // arrange
    const filter = {
        task: ''
    };
    const filtered = filterTodos(todos, filter);
    // act
    // assert
    assert.deepEqual(filtered, [
        {
            task: 'Wash dog',
            label: 'wash-dog',
            completed: true
        },
        {
            task: 'Clean house',
            label: 'clean-house',
            completed: false
        },
        {
            task: 'Do laundry',
            label: 'do-laundry',
            completed: false
        }
    ]);
});