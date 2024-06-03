// Goal: Make a network request to fetch JSON and print the result
import axios from 'axios';

// In TS, interfaces are used to define structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios
  .get(url)
  .then((response) => {
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    print(id, title, finished);
  })
  .catch((error) => {
    console.error(error);
  });

const print = (id: number, title: string, finished: boolean) => {
  console.log(`
      The todo with ID: ${id}
      has a title of: ${title}
      is it finished: ${finished}
    `);
};
