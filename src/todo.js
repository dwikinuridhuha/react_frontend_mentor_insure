import React from 'react';

export default function Todo({todo, toggelTodo}) {
    function heandelChek() {
        toggelTodo(todo.id);
    }

    return (
        <div>
            <input type='checkbox' checked={todo.complete} onChange={heandelChek}/>
            {todo.name}
        </div>
    );
}
