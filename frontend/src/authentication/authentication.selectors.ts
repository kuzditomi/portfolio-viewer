import { AppState } from '../store';

export const isAuthenticatedSelector = (state: AppState) => state.authentication.user !== undefined;

export const userNameSelector = (state: AppState) => state.authentication.user && state.authentication.user.name;
