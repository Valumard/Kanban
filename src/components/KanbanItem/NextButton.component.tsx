import React from 'react';
import State from '../../models/state.enum';
import { Button } from '@material-ui/core';
import KanbanItemType from '../../models/kanbanItem.interface';
import { useDispatch } from 'react-redux';
import { kanbanItemNextStateAction } from '../../actions/kanban.actions';

interface Props {
    item: KanbanItemType;
}

const NextButton: React.FC<Props> = ({ item }) => {

    const dispatch = useDispatch();

    if (item.state === State.Closed)
        return null;
    return <Button onClick={() => dispatch(kanbanItemNextStateAction(item))}>Next</Button>
}

export default NextButton;