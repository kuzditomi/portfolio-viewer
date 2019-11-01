import { IMPORT_ACTION_TYPES } from './import/import.actions';

export type AppAction<T, P = undefined> = (payload: P) => { type: T, payload: P }

export type AppActionTypes = IMPORT_ACTION_TYPES;