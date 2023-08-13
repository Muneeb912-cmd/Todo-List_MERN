const generateDummyTodos = (count) => {
    const todos = [];

    for (let i = 1; i <= count; i++) {
        todos.push({
            id: i,
            title: `Todo Title ${i}`,
            status: i % 2 === 0 ? 'Active' : 'Inactive',
            dueDate: `18-${i % 12 + 1}-23`, // Just an example of a due date
        });
    }

    return todos;
};

const dummyTodos = generateDummyTodos(13);

export default dummyTodos;
