import { useState, useEffect } from 'react';
import ListItem from './components/ListItem';
import Form from './components/Form';
import serviceCall, { ACTIONS } from './services/apiServices.mjs';
import './App.css';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    async function getData() {
      let data = await serviceCall(ACTIONS.read);
      setTodos(data);
    }
    getData();
  }, []);

  let list = () =>
    todos.map((todo) => {
      return <ListItem key={todo._id} todo={todo} todos={todos} setTodos={setTodos} />;
    });

  return (
    <main>
      <h1>Todo List:</h1>
      <Form setTodos={setTodos} todos={todos} />
      <div>{todos ? list() : <p>Nothing Todo...</p>}</div>
    </main>
  );
}

export default App;
