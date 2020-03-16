import KanbanItemType from '../../models/kanbanItem.interface';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import NextButton from './NextButton.component';

interface Props {
    item: KanbanItemType
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const KanbanItem: React.FC<Props> = ({ item }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {item.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <NextButton item={item} />
            </CardActions>
        </Card>
    );
}

export default KanbanItem;