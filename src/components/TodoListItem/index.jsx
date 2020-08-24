import React from 'react';
import {
    Checkbox, Icon, IconButton,
    ListItem, ListItemGraphic, ListItemText, ListItemMeta
} from 'mdc-react';

import 'components/TodoListItem/index.scss';

export default function TodoListItem({
    todo, 
    onCompleteChange,
    onDelete
 }) {
    return (
        <ListItem className="todo-list-item">
            <ListItemGraphic>
                <Checkbox 
                    checked={todo.completed}
                    onChange={onCompleteChange}
                />
            </ListItemGraphic>

            <ListItemText>{todo.title}</ListItemText>

            <ListItemMeta>
                <IconButton onClick={() => onDelete(todo.id)}>
                    <Icon>delete</Icon>
                </IconButton>
            </ListItemMeta>
        </ListItem>
    )
}
