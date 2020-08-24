import React, { useState, useContext, useEffect } from 'react';
import {
    List, Typography, Spinner
} from 'mdc-react';
import DBContext from 'context/db';
import TodoListItem from 'components/TodoListItem';
import 'components/TodoList/index.scss';

export default function TodoList({ match }) {
    const [todos, setTodos] = useState([]);
    const db = useContext(DBContext);
 
    console.log(match);
    useEffect(() => {
        db.get('todos')(collection =>
            collection.where('listId', '==', match.params.listId)
        ).then(setTodos);
    }, [db, match.params.listId]);

    const list = db.lists.find(list => list.id === match.params.listId);
    
    if (typeof list !== 'object') return "";

    // if (!list) {
    //     return <Spinner />
    // }

    return (
        <div className="todo-list">
            <Typography className="todo-list__title" variant="headline4">{list.title}</Typography>
            
            <List className="todo-list__items">
                {todos.map(todo =>
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                    />
                )}
            </List>
        </div>
    );
}
