import React, { useState } from 'react';
import {
    List, ListItem,
    TextField
} from 'mdc-react';

import 'components/TodoForm/index.scss';

export default function TodoForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [focusClass, setFocusClass] = useState('');
    const textInput = React.createRef();

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(title);
        onSubmit(title);
        setTitle('');
    }

    function handleFocus(event) {
         if (focusClass === "") {
             setFocusClass('mdc-list-item--focus');
         } else {
             setFocusClass('');
         }
    }

    function handleBlur(event) {
        if (focusClass === "") {
            setFocusClass('mdc-list-item--focus');
        } else {
            setFocusClass('');
        }
   }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <List>
                <ListItem className={focusClass}>
                    <TextField 
                        ref={textInput}
                        label="Что нужно сделать..."
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        type="text"
                        fullWidth
                    />
                </ListItem>
            </List>
        </form>
    );
}
