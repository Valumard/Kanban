import State from "./state.enum";

interface KanbanItemType {
    title: string;
    description: string;
    state: State;
    id: string;
}

export default KanbanItemType;