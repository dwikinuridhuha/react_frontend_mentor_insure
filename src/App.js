import React from 'react';
import './TodoList';
import TodoList from "./TodoList";

function App() {
  return (
      <>
        <TodoList />
        <input type="text"></input>
        <button>add</button>
        <button>clear</button>
        <div>0 left to do</div>
      </>
  );
}

export default App;
