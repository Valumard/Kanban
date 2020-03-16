import { AppState } from '../rootReducer';
import State from '../models/state.enum';

export const getKanbanItems = (state: AppState) => {
    return state.kanban.kanbanItems;
}

export const getKanbanItemsByState = (state: State) => (appState: AppState) => {
    const items = getKanbanItems(appState);
    return items.filter(item => item.state === state);
}