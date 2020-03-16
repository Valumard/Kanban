import React from 'react';
import KanbanItemType from '../../models/kanbanItem.interface';
import KanbanItem from '../KanbanItem/KanbanItem.component';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import State from '../../models/state.enum';
import NewItem from '../NewItem/NewItem.component';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

interface Props {
    label: string;
    items: KanbanItemType[],
    state: State
}


const LaneContainer: React.FC<Props> = ({ items, label, state }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <h2>{label}</h2>
            {items.map(kanbanItem => <KanbanItem key={kanbanItem.id} item={kanbanItem} />)}
            {state === State.Open && <NewItem />}
        </Paper>
    )

}

export default LaneContainer;