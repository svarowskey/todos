import React, { useState } from 'react';
import {
    List, ListItem,
    TextField
} from 'mdc-react';

import 'components/TodoForm/index.scss';

export default function TodoForm({ onSubmit }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(title);
        onSubmit(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <List>
                <ListItem>
                    <TextField 
                        label="Что нужно сделать..."
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        fullWidth
                    />
                </ListItem>
            </List>
        </form>
    );
}
