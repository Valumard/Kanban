import { combineReducers } from 'redux';
import kanbanReducer from './reducer/kanban.reducer';

const createRootReducer = () =>
    combineReducers({
        kanban: kanbanReducer,
    });

export default createRootReducer;

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;