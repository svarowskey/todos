import React from 'react';
import {
    List, Typography
} from 'mdc-react';

import TodoListItem from 'components/TodoListItem';
import 'components/TodoList/index.scss';

export default function TodoList({ list, todos, onDelete }) {
    return (
        <div className="todo-list">
            <Typography className="todo-list__title"
            variant="headline4">{list.title}</Typography>
            
            <List className="todo-list">
                {todos.map(todo =>
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                    />
                )}
            </List>
        </div>
    );
}
