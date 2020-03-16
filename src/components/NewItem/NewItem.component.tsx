import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createKanbanItemAction } from '../../actions/kanban.actions';
import { v4 as uuidv4 } from 'uuid';
import State from '../../models/state.enum';

const NewItem: React.FC = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const addNewItem = () => {
        const id = uuidv4();
        dispatch(createKanbanItemAction({ id, state: State.Open, description, title }));
        setTitle("");
        setDescription("");
    }

    return (
        <Grid container>
            <form noValidate autoComplete="off">
                <Grid item xs={12}>
                    <TextField value={title} onChange={event => setTitle(event.currentTarget.value)} label="Title" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField value={description} onChange={event => setDescription(event.currentTarget.value)} label="Description" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Button disabled={!title || !description} onClick={addNewItem}>Add</Button>
                </Grid>
            </form>
        </Grid>
    );
}

export default NewItem;