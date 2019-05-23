import filterTodos from '../src/filter-todos.js';
const test = QUnit.test;

QUnit.module('filter todos');

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
        task: 'Wash dog',
        completed: ''
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
        task: '',
        completed: ''
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

test('radio button `all` returns all tasks', assert => {
    // arrange
    const filter = {
        task: '',
        completed: 'all'
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

test('radio button `false` not done tasks', assert => {
    // arrange
    const filter = {
        task: '',
        completed: false
    };
    const filtered = filterTodos(todos, filter);
    // act
    // assert
    assert.deepEqual(filtered, [
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

test('radio button `true` not done tasks', assert => {
    // arrange
    const filter = {
        task: '',
        completed: true
    };
    const filtered = filterTodos(todos, filter);
    // act
    // assert
    assert.deepEqual(filtered, [
        {
            task: 'Wash dog',
            label: 'wash-dog',
            completed: true
        }
    ]);
});

test('radio button `true` and typed input', assert => {
    // arrange
    const filter = {
        task: 'Wash dog',
        completed: true
    };
    const filtered = filterTodos(todos, filter);
    // act
    // assert
    assert.deepEqual(filtered, [
        {
            task: 'Wash dog',
            label: 'wash-dog',
            completed: true
        }
    ]);
});

test('radio button `false` and typed input', assert => {
    // arrange
    const filter = {
        task: 'Do laundry',
        completed: false
    };
    const filtered = filterTodos(todos, filter);
    // act
    // assert
    assert.deepEqual(filtered, [
        {
            task: 'Do laundry',
            label: 'do-laundry',
            completed: false
        }
    ]);
});