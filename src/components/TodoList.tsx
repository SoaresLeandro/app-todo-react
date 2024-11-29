import React from "react";
import { Todo } from "../models/Todo";

const TodoList = () => {
    const todos: Todo[] = [
        { id: 1, title: "Ir ao mercado", done: false},
        { id: 2, title: "Lavar o carro", done: false}
    ];
    return(<table className="uk-table">
        <caption>Lista de Tarefas</caption>
        <thead>
            <tr>
                <th>Id.</th>
                <th>Título</th>
                <th>Concluída</th>
            </tr>
        </thead>
        <tbody>
            {
                todos?.map(todo => {
                    return (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.done}</td>
                    </tr>
                    )
                })
            }
        </tbody>
    </table>);
}

export default TodoList;