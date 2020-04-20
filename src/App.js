import React, {useState, useRef, useEffect} from 'react';
import './TodoList';
import TodoList from "./TodoList";
import uuidv4 from 'uuid/v4';

const LOCAL_STORAGE = 'todoApp.todo';

function App() {
    const [todos, setTodos] = useState([]);
    const nameRef = useRef();

    useEffect(() => {
        const storeStorege = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
        if(storeStorege) setTodos(storeStorege);
    }, []);
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(todos));
    }, [todos]);

    function toggelTodo (id) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleAdd(e) {
        const nameInput = nameRef.current.value;
        if(nameInput === '') return;
        setTodos(prefTodo => {
            return [...prefTodo, {id: uuidv4(), name: nameInput, complete: false}]
        });

        nameRef.current.value = null;
    };

    function handleClear() {
        const newTodos = todos.filter(todo => !todo.complete);
        setTodos(newTodos);
    }

    return (
        <>
            <TodoList todos={todos} toggelTodo={toggelTodo}/>
            <input type="text" ref={nameRef}></input>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleClear}>clear</button>
            <div>{todos.filter(todo => todo.complete).length} left to do</div>
        </>
    );
}

export default App;
