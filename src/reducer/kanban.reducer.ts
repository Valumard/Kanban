import update from 'immutability-helper';
import KanbanItem from '../models/kanbanItem.interface'
import { ActionType } from 'typesafe-actions';
import { loadKanbanItemsAction, createKanbanItemAction, kanbanItemNextStateAction, LOAD_KANBANITEMS, CREATE_KANBANITEM, KANBANITEM_NEXTSTATE } from '../actions/kanban.actions';
import KanbanState from '../models/state.enum';

export interface State {
    kanbanItems: KanbanItem[];
}

const initialState: State = {
    kanbanItems: [],
};

const calculateNextState = (state: KanbanState) => {
    let nextState;
    switch (state) {
        case (KanbanState.Open):
            nextState = KanbanState.Active;
            break;
        case KanbanState.Active:
            nextState = KanbanState.Closed;
            break;
        default: nextState = state;
    }
    return nextState;
}

export default function (
    state: State = initialState,
    action: ActionType<
        typeof loadKanbanItemsAction | typeof createKanbanItemAction | typeof kanbanItemNextStateAction
    >
) {
    switch (action.type) {
        case LOAD_KANBANITEMS:
            return update(state, { kanbanItems: { $set: action.payload } });
        case CREATE_KANBANITEM:
            return update(state, { kanbanItems: { $push: [action.payload] } });
        case KANBANITEM_NEXTSTATE:
            const nextState = calculateNextState(action.payload.state);
            const index = state.kanbanItems.findIndex(item => item.id === action.payload.id);
            return update(state, { kanbanItems: { [index]: { state: { $set: nextState } } } });
        default:
            return state;
    }
}