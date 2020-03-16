import React from 'react';
import { Grid } from '@material-ui/core';
import LaneContainer from '../LaneContainer/LaneContainer.component';
import { useSelector } from 'react-redux';
import { getKanbanItemsByState } from '../../selectors/kanbanItem.selector';
import State from '../../models/state.enum';

const LanePanel: React.FC = () => {

    const openItems = useSelector(getKanbanItemsByState(State.Open));
    const activeItems = useSelector(getKanbanItemsByState(State.Active));
    const closedItems = useSelector(getKanbanItemsByState(State.Closed));

    return (
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <LaneContainer label="Open" state={State.Open} items={openItems} />
            </Grid>
            <Grid item xs={4}>
                <LaneContainer label="Active" state={State.Active} items={activeItems} />
            </Grid>
            <Grid item xs={4}>
                <LaneContainer label="Closed" state={State.Closed} items={closedItems} />
            </Grid>
        </Grid>
    )
}

export default LanePanel;