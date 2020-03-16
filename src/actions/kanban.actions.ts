import { createAction } from 'typesafe-actions';
import KanbanItem from '../models/kanbanItem.interface';

export const LOAD_KANBANITEMS = 'LOAD_KANBANITEMS';
export type LOAD_KANBANITEMS = typeof LOAD_KANBANITEMS;

export const CREATE_KANBANITEM = 'CREATE_KANBANITEM';
export type CREATE_KANBANITEM = typeof CREATE_KANBANITEM;

export const EDIT_KANBANITEM = "EDIT_KANBANITEM";
export type EDIT_KANBANITEM = typeof EDIT_KANBANITEM;

export const KANBANITEM_NEXTSTATE = "KANBANITEM_NEXTSTATE";
export type KANBANITEM_NEXTSTATE = typeof KANBANITEM_NEXTSTATE;

export const loadKanbanItemsAction = createAction(LOAD_KANBANITEMS)<KanbanItem[]>();

export const createKanbanItemAction = createAction(CREATE_KANBANITEM)<KanbanItem>();

export const editKanbanItemAction = createAction(EDIT_KANBANITEM)<KanbanItem>();

export const kanbanItemNextStateAction = createAction(KANBANITEM_NEXTSTATE)<KanbanItem>();