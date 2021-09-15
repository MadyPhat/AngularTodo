var faker = require('faker');

var database = {
  todos: []
}

for (var i = 1; i <= 10; i++) {
  database.todos.push({
    id: i,
    title: faker.name.title(),
    description: faker.lorem.sentences(),
    deadline: faker.date.future(),
    complete: faker.random.boolean()
  });
}

console.log(JSON.stringify(database));
